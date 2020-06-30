import React from 'react'

const Icon = ({ type ,style, className}) => {
  return (
    <>
      <svg className={`myownicon ${className}`} aria-hidden="true" style={style}>
        <use xlinkHref={`#icon-${type}`}></use>
      </svg>
    </>
  )
}

export default Icon