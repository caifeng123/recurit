import React from 'react'

const Icon = ({ type ,style}) => {
  return (
    <>
      <svg className="myownicon" aria-hidden="true" style={style}>
        <use xlinkHref={`#icon-${type}`}></use>
      </svg>
    </>
  )
}

export default Icon