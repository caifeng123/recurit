import React from 'react'

import Icon from '../icon/icon'
import './backhome.css'
import { IconStyle } from '../../utils/static'
const Backhome =({history}) => {
  return (
    <div className="backhome">
      <div onClick={()=>history.replace('/')}><Icon type="house" style={{...IconStyle,fill:'#D5220C'}}/><div>首页</div></div>
      <div onClick={()=>history.goBack()}><Icon type="back" style={{...IconStyle,fill:'#D5220C'}} /><div>返回</div></div>
    </div>
  )
}
export default Backhome