import React from "react";

import './todo-list-item'

export const TodoListItem =({label, important=false})=>{

	const style = {
		color: important ? 'tomato' : 'black'
	}

	return (
		<span style={style}>
			{label}
		</span>
	)
}
