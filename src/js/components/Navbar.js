import React from 'react';
import { Link } from 'react-router';

import NavLink from './nav/NavLink';

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};
	}
	
	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}
	
	render() {	
		const { collapsed }  = this.state;
		const navClass = collapsed ? "collapse" : "";
		return (
			<div>
				<nav class="navbar navbar-inverse">
				  <div class="container-fluid">
					<div class="navbar-header">
					  <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					  </button>
					  
					  <Link to="/" class="navbar-brand">React Router</Link>
					</div>
					<div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-2">
						<ul class="nav navbar-nav">       
						    <NavLink to="/">
								<span>Home</span>
							</NavLink>
							<NavLink to="/feature">
								<span>Feature</span>
							</NavLink>
							<NavLink to={{ pathname: '/archive/awesome-react', query: {filter:'all', showImage: 'yes'} }}>
								<span>Archive</span>
							</NavLink>
							<NavLink to="/todos">
								<span>Todos</span>
							</NavLink>
						</ul>     
					</div>		
				  </div>
				  
				</nav>
			</div>
		);
	}
}

	
