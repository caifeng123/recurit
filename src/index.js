import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Index from './containers/index/index'
import HotCompany from './containers/hotcompany/hotcompany'
import CompanyDetail from './containers/companydetail/companydetail'
import Jobdetail from './containers/jobdetail/jobdetail'
import Search from './containers/search/search'

import './index.css'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/hotcompany" component={HotCompany}></Route>
      <Route path="/companydetail/:coname" component={CompanyDetail}></Route>
      <Route path="/jobdetail" component={Jobdetail}></Route>
      <Route path="/search" component={Search}></Route>
      <Route component={Index}></Route>   {/*默认组件*/}
    </Switch>
  </HashRouter>
), document.getElementById('root'));