export function count(count=0,action) {
  switch (action.type) {
	  case 'ADD_COUNT':
    	return count + 1
    case 'SUB_COUNT':
    	return count - 1
	  default:
	    return count
  }
}

let defaultTodoList = ['哈哈','嘻嘻']
export function todoList(todoList=defaultTodoList,action) {
	todoList = [].concat(todoList)
	switch (action.type){
		case 'DEL_LIST':
			todoList.splice(action.index,1)
			return todoList
		case 'ADD_LIST':
			todoList.push(action.text)
			return todoList
		default:
			return todoList
	}
}

let defaultAlertObj = {
	flag: false,
	title: '提示title',
	confirmText: '确定',
	cancelText: '取消',
	showCancel: true,
}
export function alertObj(alertObj=defaultAlertObj,action){
	switch (action.type){
		case 'SHOW_ALERT':
			return Object.assign({},defaultAlertObj,action.obj||{})
		default:
			return alertObj
	}
}