import React, { useRef } from 'react'
import { MySwiper } from '../../components/myswiper/myswiper'

import { IndexBannerImgs, HotCompanyImgs } from '../../utils/static'
import Joblist from '../../components/joblist/joblist'

import './index.css'

const Index = ({ history }) => {
  const childRef = useRef();

  const onscroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget
    if (scrollHeight - scrollTop - clientHeight < 1) {
      childRef.current.setPageindex(x=>x+1);
    }
  }
  return (
    // <div onScroll={onScroll} style={{height: '100vh', overflow: 'auto', overflowX: 'hidden'}}>
    <div className="myscroll" onScroll={onscroll} >
      <MySwiper imgs={IndexBannerImgs} />
      {
         HotCompanyImgs&&<img src={require(`../../assets/imgs/hotcompany/${HotCompanyImgs}`)}
          alt={HotCompanyImgs} onClick={() => history.push('hotcompany')} />
      }
      <Joblist history={history} title="职位招聘" cRef={childRef} />
    </div>
  )
}
export default Index