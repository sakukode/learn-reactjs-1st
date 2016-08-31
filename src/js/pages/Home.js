import React from 'react';

export default class Home extends React.Component {
	constructor() {
		super();		
	}

	render() {					
		const homeStyle = {
			backgroundColor: "#eeeeee",
			padding: "10px",
			minHeight: "400px"
		};
		
		return (
			<div style={homeStyle}>				
				<h1>Home Page</h1>
				<p>This is Home Page</p>				
			</div>
		);
	}
}
