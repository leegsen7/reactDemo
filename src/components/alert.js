import React,{Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as action from '../redux/action'

import '../style/alert'

class Alert extends Component {
  constructor(props){
    super(props)
  }
	render(){
    let {alertObj,dispatch} = this.props
    this.fn = bindActionCreators(action, dispatch)
		return (
      <div>
        {alertObj.flag &&
          <div className="alert-page fix-mask">
            <div className="alert-main">
              <div className="alert-title">{alertObj.title}</div>
              <div className="alert-btn-wrap">
                <button onClick={this.confirmFn}>{alertObj.confirmText}</button>
              </div>
            </div>
          </div>
        }
      </div>
		)
	}
  confirmFn = () => {
    let {confirmCallback} = this.props.alertObj
    typeof confirmCallback === 'function' && confirmCallback()
    this.fn.showAlert({flag: false})
  }
}

export default connect(state => ({
  alertObj: state.alertObj
}))(Alert)