import React, { useEffect, useState, createContext, useImperativeHandle } from 'react'

import { getJobList } from '../../api/index'

import Selector from '../selector/selector'
import Loading from '../../components/loading/loading'
import Icon from '../icon/icon'
import { useSelector } from '../../utils/common'
import { salaryList, degreeList, SelecoritemsMap, IconStyle } from '../../utils/static'
import './joblist.css'

export const SelectorContext = createContext();

const initSelector = {
  degreefrom: "",
  providesalarname: "",
}

const Joblist = ({ history, title, preselector, cRef }) => {
  const [selector, setSelector] = useSelector({
    ...initSelector,
    ...preselector
  })
  const [showshelter, setShowshelter] = useState("")
  const [joblists, setJoblists] = useState([])
  const [list, setlist] = useState([])
  const [pageindex, setPageindex] = useState(1)
  const [myloading, setMyloading] = useState(true)
  const [selectorNameMap, setSelectorNameMap] = useSelector(SelecoritemsMap)

  useEffect(() => {
    if (showshelter === "providesalarname")
      setlist(salaryList)
    else if (showshelter === "degreefrom")
      setlist(degreeList)
  }, [showshelter])
  useEffect(() => {
    getJobList({ ...selector, pageindex }).then(res => {
      setJoblists(joblists => joblists.concat(res.data.data.list))
      if (res.data.data.list.length === 0) {
        setMyloading(false)
      }
    })
  }, [pageindex, selector])

  useImperativeHandle(cRef, () => ({
    setPageindex :setPageindex
  }));

  const listitemclick = (listitem) => {
    setJoblists([])
    if (listitem.includes('不限')) {
      setSelector({ [showshelter]: "" })
      setSelectorNameMap({ [showshelter]: listitem.slice(0, 2) + '筛选' })
    } else {
      setSelector({ [showshelter]: listitem })
      setSelectorNameMap({ [showshelter]: listitem })
    }
    setShowshelter("")
    setPageindex(1)
    setMyloading(true)
  }

  return (
    <>
      <div className="sticky" >
        {title && <div className="title">{title}</div>}
        {!preselector && <SelectorContext.Provider value={{ showshelter, setShowshelter }}>
          <Selector SelecoritemsMap={selectorNameMap} />
        </SelectorContext.Provider>}
      </div>
      {
        showshelter ? (
          <div className="shelter">
            {
              list.map(listitem => (
                <div className="shelter-item" key={listitem} onClick={() => listitemclick(listitem)} >
                  {listitem}
                </div>
              ))
            }
          </div>
        ) : (
            <div id="contain">
              {
                joblists?.map(job => (
                  <div className="item" key={job.id} onClick={() => history.push({ pathname: '/jobdetail', query: { job } })}>
                    <div className="item-top">
                      <span className="item-top-jobname">{job.jobname}</span>
                      <span className="item-top-salary">{job.providesalarname}</span>
                    </div>
                    <div className="item-middle">
                      <span className="item-middle-left item-middle-common" onClick={() => history.push(`/companydetail/${job.coname}`)}>更多职位</span>
                      <span className="item-middle-right item-middle-common">{job.coname}</span>
                    </div>
                    <div className="item-bottom">
                      <span className="item-bottom-common"><Icon type="city" style={IconStyle} />&nbsp;{job.jobareaname}</span>
                      <span className="item-bottom-common"><Icon type="degree" style={IconStyle} />&nbsp;{job.degreefrom}及以上</span>
                      <span className="item-bottom-common"><Icon type="people" style={IconStyle} />&nbsp;{job.jobnum}人</span>
                    </div>
                  </div>
                ))
              }
              <Loading loading={myloading} />
            </div>
          )
      }
    </>
  )
}
export default Joblist