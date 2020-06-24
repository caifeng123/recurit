import React,{useEffect,useState} from 'react'

import {getJobList} from '../../api/index'
import {CompanyDetailImg} from '../../utils/static'

import Joblist from '../../components/joblist/joblist'

import './companydetail.css'

export const CompanyDetail = ({match,history}) => {
  const [companyInfo, setCompanyInfo] = useState({})
  const [showleft,setShowleft] = useState(true)
  const coname=match.params.coname
  useEffect(()=>{
    getJobList({coname}).then(res=>{
      const {data}=res.data
      window.coapi.getCoDetail(data.list[0]['coid'],companyInfo=>{
        setCompanyInfo(companyInfo.resultbody)
      })
    })
  },[coname])
  return (
    <>
      <div style={{position:"relative"}}>
        <img src={require(`../../assets/imgs/banner/${CompanyDetailImg}`)} alt={CompanyDetailImg}/>
        <div className="companyname">{companyInfo.coname}</div>
      </div>
      <div className="companyinfo-1">
        <div className="companyinfo-item">
          <img src={require('../../assets/imgs/icon/floor.png')} alt=""/>
          <span className="companyinfo-item-title">公司性质</span>
          <span>|</span>
          <span>{companyInfo.companytype}</span>
        </div>
        <div className="companyinfo-item">
          <img src={require('../../assets/imgs/icon/people.png')} alt=""/>
          <span className="companyinfo-item-title">公司规模</span>
          <span>|</span>
          <span>{companyInfo.companysizename?companyInfo.companysizename:'该公司未公开'}</span>
        </div>
      </div>
      <div className="selector">
        <span className={showleft?"selector-item active":"selector-item"} onClick={()=>setShowleft(true)}>招聘职位</span>
        <span className={showleft?"selector-item":"selector-item active"} onClick={()=>setShowleft(false)}>公司简介</span>
      </div>
      {
        showleft?(
          // <Joblist joblists={joblists} history={history}/>
          <></>
        ):(
          <article>{companyInfo.coinfo}</article>
        )
      }
    </>
  )
}
