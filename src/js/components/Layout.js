import React from 'react';

import Navbar from "./Navbar";


export default class Layout extends React.Component {
	constructor() {
		super();		
	}

	render() {			
		return (
			<div>				
				<Navbar/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
						    <h1>Home Page</h1>
							<p>This is Page Home</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
