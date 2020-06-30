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
      childRef.current.setPageindex(x => x + 1);
    }
  }
  const HotCompanyImg = HotCompanyImgs[0]
  return (
    <div className="myscroll" onScroll={onscroll} >
      <MySwiper imgs={IndexBannerImgs} />
      {
        HotCompanyImg && <img src={require(`../../assets/imgs/hotcompany/${HotCompanyImg}`)}
          alt={HotCompanyImg} onClick={() => history.push('hotcompany')} />
      }
      <Joblist history={history} title="职位招聘" cRef={childRef} showSelector={true}/>
    </div>
  )
}
export default Index