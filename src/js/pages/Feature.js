import React from 'react';

import Article from '../components/Article';

export default class Feature extends React.Component {
	constructor() {
		super();		
	}

	render() {			
		const Articles = [
			'Awesome React',
			'ReactJs vs VueJs',
			'Beatiful JS',
			'JS is strong'
		].map((title, i) => <Article key={i} title={title} />);
		
		const adText = [
			"Ad spot #1",
			"Ad spot #2",
			"Ad spot #3",
			"Ad spot #4",
			"Ad spot #5",
		];
		
		const randomAd = adText[Math.round( Math.random() * (adText.length-1))];
		
		return (
			<div>
				<h1>Feature Page</h1>
				<div class="row">
					<div class="col-lg-12">
						<div class="well text-center">
							{randomAd}
						</div>
					</div>
				</div>
				<div class="row">{Articles}</div>
			</div>
		);
	}
}
