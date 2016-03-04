import React from 'react';
import Styles from '../styles/Styles.js';
import Home from './Home.jsx';
import Catalog from './Catalog.jsx';

export default class Content extends React.Component {
	constructor(props) {
		super(props)
	};
	render(){
			switch (this.props.category) {
				case 0:
					return(
					<div className={'MainContentWrapper'} style={Styles.MainContentWrapper}>
						<Home />
					</div>
					)
					break;
				case 1:
					return(
					<div className={'MainContentWrapper'} style={Styles.MainContentWrapper}>
						<Catalog data={this.props.data.catalogData} />
					</div>
					)
					break;
			}
	}
}
