import React, {useState} from "react";

import './todo-list-item.css'

export const TodoListItem = ({label, onDeleted}) => {

	const [done, setDone] = useState(false)
	const [important, setImportant] = useState(false)


	const onLabelClick = (e) => {
		setDone((done) => !done)
	}

	const onMarkImportant = () => {
		setImportant((important) => !important)
	}

	let classNames = 'todo-list-item'
	if (done) classNames += ' done'
	if (important) classNames += ' important'

	return (
		<span className={classNames}>
			<span
				className='todo-list-item-label'
				onClick={(e) => onLabelClick(e)}>
			{label}
		</span>

			 <button type="button"
							 className="btn btn-outline-success btn-sm float-right"
							 onClick={() => onMarkImportant()}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
							className="btn btn-outline-danger btn-sm float-right"
							onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
		</span>
	)
}
