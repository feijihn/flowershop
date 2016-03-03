import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TopMenu from './TopMenu.jsx';


injectTapEventPlugin(); //needed for material-ui to wrok untill react 1.0.0 would be released

export default class Main extends React.Component {
	render() {
		return (
			<div className={'MainView'}>  
				<TopMenu />
			</div>
		)
	}
}
