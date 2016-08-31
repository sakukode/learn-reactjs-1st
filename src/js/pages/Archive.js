import React from 'react';

export default class Archive extends React.Component {
	constructor() {
		super();		
	}

	render() {		
		const { params } = this.props;
		const { title } = params;
		const { query } = this.props.location;
		const { filter, showImage } = query;
		return (
			<div>
				<h1>Archive Page</h1>
				<p>This is Archive Page</p>					
				<h3>{title}</h3> <br />
				<p> filter : {filter} , show image : {showImage}</p>
			</div>
		);
	}
}
