import {ADD_COUNT,SUB_COUNT} from './action'

export function count(count=0,action) {
  switch (action.type) {
	  case ADD_COUNT:
    	return count + 1
    case SUB_COUNT:
    	return count - 1
	  default:
	    return count
  }
}