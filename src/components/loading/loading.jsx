import React from 'react'
import Icon from '../icon/icon'

import './loading.css'

const Loading = ({ loading }) => {
  return (
    <div className="loading">
      {
        loading ? (
          <>
            <Icon type="load" style={{width: '20px', height: '20px', fill: '#ccc',transform:' translate(0, 20%)'}} className="myicon" />
            <span className="textinfo">加载中</span>
          </>
        ) : (
            <span className="textinfo">已到底</span>
          )
      }
    </div>
  )
}
export default Loading