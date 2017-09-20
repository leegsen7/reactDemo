import React,{Component} from 'react'

import '../style/home'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemArr: ['哈哈','嘻嘻'],
      inputVal: ''
    }
  }
	render(){
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
          {this.state.itemArr.map((item,index) =>
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