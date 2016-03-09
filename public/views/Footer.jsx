import React from 'react';
import {Paper} from 'material-ui'
import Styles from '../styles/Styles.js';

export default class Footer extends React.Component {
	render(){
		return(
			<Paper zDepth={8}>
			<div style={Styles.Footer}>
			1420-2016 VASYAN-SITES LTD.
			</div>
			</Paper>
		)
	}
}
