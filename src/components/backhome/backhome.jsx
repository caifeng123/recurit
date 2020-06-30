import React,{ useEffect,useState }  from 'react'

import Icon from '../icon/icon'
import './backhome.css'
import { IconStyle } from '../../utils/static'
const Backhome =({history}) => {
  const [showme, setShowme] = useState(true)
  useEffect(()=>{
    if(showme){
      setTimeout(()=>{
        setShowme(false)
        window.$('.backhome').animate({right:'-30px'},100)
      },4000)
    }
  },[showme])
  const backHomeClick = () =>{
    if(window.$('.backhome').css('right')==='-30px'){
      window.$('.backhome').animate({right:'13px'},100)
      setShowme(true)
    }
  }
  const clickHome = () =>{
    if(window.$('.backhome').css('right')==='13px')
      history.replace('/')
  }
  const clickBack = () =>{
    if(window.$('.backhome').css('right')==='13px')
      history.goBack()
  }
  return (
    <div className="backhome" onClick={()=>backHomeClick()}>
      <div onClick={()=>clickHome()}><Icon type="house" style={{...IconStyle,fill:'#D5220C'}}/><div>首页</div></div>
      <div onClick={()=>clickBack()}><Icon type="back" style={{...IconStyle,fill:'#D5220C'}} /><div>返回</div></div>
    </div>
  )
}
export default Backhome