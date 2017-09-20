import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as action from '../redux/action'
import '../style/home'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: ''
    }
  }
	render(){
    let {todoList,dispatch} = this.props
    this.fn = bindActionCreators(action,dispatch)

		return (
			<div className="home-page">
				<div className="page-title">这是Home页</div>
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
          {todoList.map((item,index) =>
            <div className="box-item" key={index}>{index+1}. {item}
              <button onClick={this.deleteFn.bind(this,index)}>删除</button>
            </div>
          )}
        </div>
			</div>
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
    this.fn.addList(val)
    this.setState({
      inputVal: ''
    })
  }
  deleteFn(index){
    this.fn.showAlert({
      flag: true,
      title: '确认删除？',
      confirmCallback: () => this.fn.delList(index)
    })
  }
}

export default connect(state => ({
  todoList: state.todoList
}))(Home)