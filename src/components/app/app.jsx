import React from "react";

import './app'

import {AppHeader} from "../app-header";
import {ItemStatusFilter} from "../item-status-filter";
import {SearchPanel} from "../search-panel";
import {TodoList} from "../todo-list";

export const App = (props) => {
	let todoData = [
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

	return (
		<div className='container card'>
			<div className='card-body'>
				<AppHeader toDo={3} done={1}/>
				<div className='d-flex'>
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				<TodoList todoData={todoData}/>
			</div>
		</div>
	)
}
