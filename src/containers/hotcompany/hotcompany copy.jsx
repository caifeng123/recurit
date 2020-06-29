import React, { useState, useEffect ,useRef} from 'react'
import {
  SearchBar,
  List
} from 'antd-mobile';
import BScroll from 'better-scroll'

import { getCompanyList } from '../../api/index'

import './hotcompany.css'
import Loading from '../../components/loading/loading'

const Item = List.Item

export const HotCompany = ({history}) => {
  const [input, setInput] = useState("")
  const [companys, setCompanys] = useState([])
  const [pageindex, setPageindex] = useState(1)
  const [myloading, setMyloading] = useState(true)
  const loading = useRef(true)

  useEffect(() => {
    getCompanyList({ pageindex, coname: input }).then(res=>{
      setCompanys(companys=>companys.concat(res.data.data.list))
      if(res.data.data.list.length===0){
        loading.current=false
        setMyloading(false)
      }
    })
  }, [input,pageindex])

  useEffect(() => {
    const bs =  new BScroll('.wrapper',{
      pullUpLoad:true
    })
   
    bs.on('pullingUp', () => {
      if(loading.current){
        setPageindex(x=> x+1 )
        setTimeout(() => {
          bs.finishPullUp()
          bs.refresh()
        }, 1000);
      }else{
        setMyloading(false)
        bs.finishPullUp()
      }
    })
  }, [])
  
  const inputsearch = (val) =>{
    setInput(val)
    setCompanys([])
    setPageindex(1)
  }
  return (
    <>
    {console.log(companys)}
      <SearchBar placeholder="Search" value={input} maxLength={8} onChange={(val) =>inputsearch(val)} style={{zIndex:9}}/>
      <div className="wrapper">
        <List renderHeader={() => '点击查看公司详情'} className="">
          {
            companys?.map(company => (
              <Item arrow="horizontal" key={company.coname} onClick={() => history.push(`/companydetail/${company.coname}`)}>{company.coname}</Item>
            ))
          }
          <Loading loading={myloading}/>
        </List>
      </div>
    </>
  )
}
