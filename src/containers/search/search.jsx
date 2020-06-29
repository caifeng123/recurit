import React,{useState} from 'react'

import {
  SearchBar
} from 'antd-mobile';



const Search = () => {
  const [state, setstate] = useState()
  return (
    <>
      <SearchBar placeholder="输入你要搜索的职位"  />   
    </>
  )
}
export default Search