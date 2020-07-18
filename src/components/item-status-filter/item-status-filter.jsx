import React from "react";

import './item-status-filter'

export const ItemStatusFilter = () => {
	return (
		<div className='btn-group'>
			<button type="button" className="btn btn-sm btn-info ">All</button>
			<button type="button" className="btn btn-sm btn-outline-dark">Active</button>
			<button type="button" className="btn btn-sm btn-outline-dark">Done</button>
		</div>
	)
}
