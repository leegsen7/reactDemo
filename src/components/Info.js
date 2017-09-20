import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addCount} from '../redux/action'

import '../style/info'

class Info extends Component {
	render(){
		let {count,addCountFn} = this.props
		return (
			<div className="info-page">
				<div className="page-title">这是Info页，这里有个计数器</div>
				<div className="info-box">{count}
					<button className="right" onClick={addCountFn}>+1</button>
				</div>
			</div>
		)
	}
}

let stateFn = state => ({
  count: state.count
}),
dispatchFn = dispatch => ({
  addCountFn: () => dispatch(addCount())
})

export default connect(stateFn,dispatchFn)(Info)
