import React from 'react';

import Title from "./header/Title";

export default class Header extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
				<Title />
			</div>
		);
	}
}
