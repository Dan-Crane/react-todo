import React, {useState, useCallback} from "react";

import './app.css'

import {AppHeader} from "../app-header";
import {ItemStatusFilter} from "../item-status-filter";
import {SearchPanel} from "../search-panel";
import {TodoList} from "../todo-list";

export const App = (props) => {
	let initialState = [
		{
			id: 1,
			label: 'Create react ToDo',
			important: true
		},
		{
			id: 2,
			label: 'Drink coffee',
			important: false
		},
		{
			id: 3,
			label: 'la la la',
			important: false
		},
	]

	const [state, setState] = useState(initialState)

	const onDeleted = (id) => {
		const newArr = state.filter(el => el.id !== id)

		setState(newArr)
	}

	// const deleteItem = (id)=> useCallback(()=>{
	// 	const newArr = state.filter(el => el.id !== id)
	// 	setState(newArr)
	// }, [id])

	return (
		<div className='container card'>
			<div className='card-body'>
				<AppHeader toDo={3} done={1}/>
				<div className='d-flex nav-panel'>
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				<TodoList state={state} onDeleted={onDeleted}/>
			</div>
		</div>
	)
}
