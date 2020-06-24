import React,{useEffect,useState} from 'react'

import {getJobList} from '../../api/index'


import Icon from '../icon/icon'

import './joblist.css'

const iconstyle = { width: '16px', height: '16px', fill: '#ccc' }

const Joblist = ({ selector,history }) => {
  const [joblists,setJoblists] = useState([])
  useEffect(()=>{
    getJobList({...selector,pageindex:1}).then(res=>{
      setJoblists(res.data.data.list)
    })
  },[selector])
  return (
    <>
      {
        joblists?.map(job => (
          <div className="item" key={job.id}>
            <div className="item-top">
              <span className="item-top-jobname">{job.jobname}</span>
              <span className="item-top-salary">{job.providesalarname}</span>
            </div>
            <div className="item-middle">
              <span className="item-middle-left item-middle-common" onClick={()=>history.push(`/companydetail/${job.coname}`)}>更多职位</span>
              <span className="item-middle-right item-middle-common">博拉网络</span>
            </div>
            <div className="item-bottom">
              <span className="item-bottom-common"><Icon type="city" style={iconstyle} />&nbsp;{job.jobareaname}</span>
              <span className="item-bottom-common"><Icon type="degree" style={iconstyle} />&nbsp;{job.degreefrom}及以上</span>
              <span className="item-bottom-common"><Icon type="people" style={iconstyle} />&nbsp;{job.jobnum}</span>
            </div>
          </div>
        ))
      }
    </>
  )
}
export default Joblist