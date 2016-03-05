import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header.jsx';
import Content from './Content.jsx';
import data from '../data/Data.js';


injectTapEventPlugin(); //needed for material-ui to wrok untill react 1.0.0 would be released


export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			category: 0,
		};
	};

	menuClicked = (value) => {
		this.setState({
			category: +value,
		});
	};

	render() {
		return (
			<div className={'MainView'}>  
				<Header clickEvent={this.menuClicked} />
				<Content data={data} category={this.state.category} />
			</div>
		)
	}
}
