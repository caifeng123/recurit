import React,{useState} from 'react'

import {
  SearchBar
} from 'antd-mobile';

import Backhome from '../../components/backhome/backhome'
import Joblist from '../../components/joblist/joblist'

const Search = ({history}) => {
  const [keyword, setKeyword] = useState("")
  return (
    <>
      <SearchBar placeholder="输入你要搜索的职位" value={keyword} maxLength={8} onChange={(val) =>setKeyword(val)} style={{zIndex:9}}/>   
      <Joblist changeitem={{keyword}} firstshow={false} showSelector={false}/>
      <Backhome history={history} />
    </>
  )
}
export default Search