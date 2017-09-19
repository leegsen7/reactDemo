import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home'
import Info from './Info'
import User from './User'

import './style/App.scss';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '这是标题',
      flag: true,
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
          <div className="box">
            <div className="box-add">
              <input
                type="text"
                value={this.state.inputVal}
                onChange={this.changeFn}
                onKeyUp={this.keyupFn}
              />
              <button onClick={this.addFn}>添加</button>
            </div>
            {this.state.itemArr.map((item,index) =>
              <div className="box-item" key={index}>{index+1}. {item}
                <button onClick={this.deleteFn.bind(this,index)}>删除</button>
              </div>
            )}
          </div>
          <div className='route-page'>
            <Route path='/' component={Home} exact></Route>
            <Route path='/info' component={Info}></Route>
            <Route path='/user' component={User}></Route>
          </div>
        </div>
      </Router>
    )
  }
  changeFn = e => {
    this.setState({
      inputVal: e.target.value
    })
  }
  keyupFn = e => {
    if (e.keyCode === 13){
      this.addFn()
    }
  }
  addFn = () => {
    let val = this.state.inputVal
    if (!val) return
    this.state.itemArr.push(val)
    this.setState({
      itemArr: this.state.itemArr,
      inputVal: ''
    })
  }
  deleteFn(index){
    this.state.itemArr.splice(index,1)
    this.setState({
      itemArr: this.state.itemArr
    })
  }
}
