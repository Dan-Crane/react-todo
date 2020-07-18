import React from "react";

import './todo-list.css'

import {TodoListItem} from "./todo-list-item";

export const TodoList = ({state, onDeleted}) => {

	const item = state.map(i => {
		const {id, ...itemProps} = i

		return (
			<li className='list-group-item' key={id}>
				<TodoListItem {...itemProps}
											onDeleted={()=>onDeleted(id)}/>
			</li>
		)
	})

	return (
		<ul className='list-group todo-list'>
			{item}
		</ul>
	)
}
