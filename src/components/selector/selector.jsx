import React, { useState } from 'react'

import './selector.css'
import Icon from '../icon/icon'

import { Selecoritems } from '../../utils/static'

const Selector = () => {
  const [downSelectindex, setDownSelectindex] = useState(0)

  return (
    <>
      {
        Selecoritems?.map(selecoritem => (
          <div className="selector-shadow">
            <div></div>
          </div>

        ))
      }

      <div style={{ display: 'flex' }}>
        <div className="myselector">
          {
            Selecoritems?.map(selecoritem => (
              <div className="myselector-item" >
                {selecoritem}
                <Icon type="down" style={{ width: '24px', height: '12px', fill: '#333', float: 'right', marginTop: '10px' }}
                  className="selector-icon" />
              </div>
            ))
          }
        </div>
        <button className="searchbutton"><Icon type="search"
          style={{ width: '14px', height: '14px', fill: '#fff', transform: ' translate(-50%, 16%)' }}
        />搜索</button>
      </div>
    </>
  )
}
export default Selector