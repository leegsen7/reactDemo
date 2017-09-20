export let addCount = () => ({
	type: 'ADD_COUNT'
})

export let subCount = () => ({
	type: 'SUB_COUNT'
})

export let addList = text => ({
	type: 'ADD_LIST',
	text
})

export let delList = index => ({
	type: 'DEL_LIST',
	index
})

export let showAlert = obj => ({
	type: 'SHOW_ALERT',
	obj
})