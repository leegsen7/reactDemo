import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as action from '../redux/action'

import '../style/info'

class Info extends Component {
	render(){
		let {count,dispatch} = this.props,
			fn = bindActionCreators(action, dispatch)

		return (
			<div className="info-page">
				<div className="page-title">这是Info页，这里有个计数器</div>
				<div className="info-box">{count}
					<button className="right" onClick={fn.addCount}>+1</button>
					<button className="right" style={{marginRight: '10px'}} onClick={fn.subCount}>-1</button>
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	count: state.count
}))(Info)
