import React from 'react';
import {Paper} from 'material-ui'

export default class Footer extends React.Component {
	render(){
		return(
			<Paper zDepth={8}>
			<div style={{borderTop: '1px solid rgba(0,0,0,0.3)', padding: 10, height: '100%', width: '100%', textWeight: 900, fontFamily:'\'Roboto\', sans-serif', fontSize: 15}}>
			1420-2016 VASYAN-SITES LTD.
			</div>
			</Paper>
		)
	}
}
