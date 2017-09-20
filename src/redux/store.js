import { createStore,combineReducers } from 'redux'

import * as reducer from './reducer'

export default createStore(combineReducers(reducer))