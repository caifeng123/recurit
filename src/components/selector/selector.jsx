import React, { useContext} from 'react'

import './selector.css'
import Icon from '../icon/icon'
import { Selecoritems } from '../../utils/static'

import {SelectorContext} from '../joblist/joblist'


const Selector = ({SelecoritemsMap,history}) => {
  const {showshelter,setShowshelter } = useContext(SelectorContext);
  const clickSelector = (e,selecoritem) =>{
    if(showshelter!==selecoritem){
      e.currentTarget.classList.add("active");
      setShowshelter(selecoritem)
      document.querySelector('.title').scrollIntoView({behavior: 'smooth'})
    }else{
      e.currentTarget.classList.remove("active");
      setShowshelter("")
    }
  }
  return (
    <>
      <div style={{ padding:'10px 0'}}>
        <div className="myselector">
          {
            Selecoritems?.map(selecoritem => (
              <div className={showshelter===selecoritem?'activeselect myselector-item':'myselector-item'} key={selecoritem} onClick={(e)=>clickSelector(e,selecoritem)}>
                <span style={{whiteSpace: 'nowrap'}}>{SelecoritemsMap[selecoritem]}</span>
                <Icon type="down" style={{ width: '24px', height: '12px', float: 'right', marginTop: '10px',
                transform: showshelter===selecoritem?'rotate(180deg)':'unset' ,fill:showshelter===selecoritem?'#D5220C':'#333'}}
                  />
              </div>
            ))
          }
          <button className="searchbutton" onClick={() => history.push('search')} ><Icon type="search"
            style={{ width: '14px', height: '14px', fill: '#fff', transform: ' translate(-50%, 16%)' }}
          />搜索</button>
        </div>
        
      </div>
    </>
  )
}
export default Selector