import React, { useState, useEffect } from 'react'

import { post } from '../../utils/common'

import Icon from '../../components/icon/icon'
import Backhome from '../../components/backhome/backhome'

import './jobdetail.css'

const iconstyle = { width: '16px', height: '16px', fill: '#ccc' }

const Jobdetail = ({ history }) => {
  const job = history.location.query?history.location.query.job:window.JSON.parse(window.sessionStorage.getItem('job'))
  history.location.query&&window.sessionStorage.setItem('job', window.JSON.stringify(job));
  const id = job.sync_jobid
  const [showshadow, setShowshadow] = useState(false)
  const [jobinfo, setJobinfo] = useState('')
  useEffect(() => {
    window.coapi.getJobDetail(id, res => {
      setJobinfo(res.resultbody.jobinfo)
    })
  }, [id])

  return (
    <div className="joblist">
      <div className="item">
        <div className="item-top">
          <span className="item-top-jobname">{job.jobname}</span>
        </div>
        <div className="item-middle">
          <span className="item-middle-left item-middle-common" onClick={() => history.push(`/companydetail/${job.coname}`)}>更多职位</span>
          <span className="item-middle-right item-middle-common">{job.coname}</span>
        </div>
        <div className="item-bottom">
          <span className="item-bottom-common"><Icon type="city" style={iconstyle} />&nbsp;{job.jobareaname}</span>
          <span className="item-bottom-common"><Icon type="degree" style={iconstyle} />&nbsp;{job.degreefrom}及以上</span>
          <span className="item-bottom-common"><Icon type="people" style={iconstyle} />&nbsp;{job.jobnum}人</span>
        </div>
      </div>
      <div className="jobitem-content">
        <div className="jobitem-content-top">
          <span>薪资范围:</span>
          <span className="item-top-salary">{job.providesalarname}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: jobinfo }} />
      </div>

      <div className="bottom">
        <button className="bottom-button bottom-button-left" onClick={() => setShowshadow(true)}><Icon type="share" style={{ ...iconstyle, fill: '#D5220C' }} />&nbsp;分享</button>
        <button className="bottom-button bottom-button-right" onClick={() => post(id,job.ctmid,job.jobid)}>投递简历</button>
      </div>
      {
        showshadow && (
          <div className="middle-shadow">
            <img src={require('../../assets/imgs/common/share-tip.png')} alt="" />
            <div className="middle-shadow-info">点击上方分享按钮直接分享</div>
            <button className="middle-shadow-button" onClick={() => setShowshadow(false)}>知道了</button>
          </div>
        )
      }
      <Backhome history={history} />
    </div>
  )
}
export default Jobdetail