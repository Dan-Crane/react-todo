import React from "react";

import './todo-list'

import {TodoListItem} from "./todo-list-item";

export const TodoList = ({todoData}) => {

	const item = todoData.map(i => {
		const {id, ...itemProps} = i

		return (
			<li key={id}>
				<TodoListItem {...itemProps}/>
			</li>
		)
	})

	return (
		<ul>
			{item}
		</ul>
	)
}
