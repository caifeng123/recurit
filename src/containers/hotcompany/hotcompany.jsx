import React, { Component } from 'react'
import {
  SearchBar,
  List
} from 'antd-mobile';
import BScroll from 'better-scroll'

import { getCompanyList } from '../../api/index'
import Backhome from '../../components/backhome/backhome'

import './hotcompany.css'
import Loading from '../../components/loading/loading'
import Icon from '../../components/icon/icon'

class HotCompany extends Component {
  state = {
    pageindex:1,
    coname:"",
    companys:[],
    loading:true //
  }
  //获取数据的异步操作
  getmoreinfo = (pageindex,input) =>{
    getCompanyList({ pageindex, coname: input }).then(res=>{
      this.setState({companys:this.state.companys.concat(res.data.data.list)})
      if(res.data.data.list.length===0){
        this.setState({loading:false})
      }
    })
  }
  onInputChange = (value) =>{
    this.setState({coname:value,pageindex:1,companys:[]})
    this.getmoreinfo(1,value)
  }
  componentDidMount(){
    const bs =  new BScroll('.wrapper',{
      pullUpLoad:true
    })
    //初始化数据操作
    this.getmoreinfo(1,"")
    //初始化定义上拉加载函数
    bs.on('pullingUp', () => {
      this.setState({pageindex:this.state.pageindex+1})
      this.getmoreinfo(this.state.pageindex,this.state.input)
      //延迟一秒刷新 这边不用看
      setTimeout(() => {
        bs.finishPullUp()
        bs.refresh()
      }, 1000);
    })
  }
  render() {
    const {history} = this.props
    
    return (
      <>
        <SearchBar placeholder="输入公司名称" value={this.state.coname} maxLength={8} onChange={(val) =>this.onInputChange(val)} style={{zIndex:9}}/>
        <div className="wrapper">
          <List renderHeader={() => '点击查看公司详情'}>
              {/* this.state.companys?.map(company => (
                <Item arrow="horizontal" key={company.coname} onClick={() => history.push(`/companydetail/${company.coname}`)}>{company.coname}</Item>
              )) */}
            {
              this.state.companys?.map(company => (
                <div key={company.coname} onClick={() => history.push(`/companydetail/${company.coname}`)}>
                  {company.coname}
                  <Icon type='down' className="lookmore"/>
                </div>
              ))
            }
            <Loading loading={this.state.loading}/>
          </List>
        </div>
        <Backhome history={history}/>
      </>
    )
  }
}

export default HotCompany