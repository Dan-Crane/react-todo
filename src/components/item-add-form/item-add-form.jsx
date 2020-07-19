import React from "react";

import './item-add-form.css'

export const ItemAddForm = ({addItem}) => {
	return (
		<form className='item-add-form d-flex'>
			<input type="text"
						 className="form-control"
						 placeholder="What needs to be done"/>
			<button
				onClick={()=>addItem('hello World')}
				className="btn btn-info">
				Add Item
			</button>
		</form>
	)
}
