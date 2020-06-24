import React,{useEffect,useState} from 'react'
import {MySwiper} from '../../components/myswiper/myswiper'

import {getJobList} from '../../api/index'
import {IndexBannerImgs,HotCompanyImgs} from '../../utils/static'
import Joblist from '../../components/joblist/joblist'
import Selector from '../../components/selector/selector'

import './index.css'

export const Index = ({history}) => {
  const [pageindex,setPageindex] = useState(1)

  return (
    <>
      <MySwiper imgs={IndexBannerImgs}/>
      {
        HotCompanyImgs&&<img src={require(`../../assets/imgs/hotcompany/${HotCompanyImgs}`)}
          alt={HotCompanyImgs} onClick={()=>history.push('hotcompany')}/>
      }
      <h1 className="title">职位招聘</h1>
      <Selector />
      <Joblist selector={{jobareaname:'上海'}} history={history}/>
    </>
  )
}