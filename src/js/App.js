import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';

class App extends React.Component {
	constructor() {
		super();		
	}

	render() {					
		return (
			<div>				
				<Navbar />
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App


