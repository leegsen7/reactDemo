import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home'
import Info from './Info'
import User from './User'

import '../style/App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemArr: ['哈哈','嘻嘻'],
      inputVal: ''
    }
    this.linkArr = [{
      text: '首页',
      url: '/'
    },{
      text: '信息',
      url: '/info'
    },{
      text: '我的',
      url: '/user'
    }]
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            {this.linkArr.map(item =>
              <Link to={item.url} className="link-item" key={item.url}>{item.text}</Link>
            )}
          </header>
          <div className='route-page'>
            <Route path='/' component={Home} exact></Route>
            <Route path='/info' component={Info}></Route>
            <Route path='/user' component={User}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App