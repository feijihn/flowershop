import React from 'react';
import {Paper} from 'material-ui'
import Styles from '../styles/Styles.js';

export default class Footer extends React.Component {
	render(){
		return(
			<Paper zDepth={8} style={Styles.Footer}>
				<div style={{float: 'left', marginBottom: 15}}>
					<p>©2016. MAJORGARDER. ALL RIGHTS RESERVED.</p>
					<a href='#' 
						style={{
							color: 'rgba(0,0,0,0.5)', 
							marginTop: -10, 
							float: 'right', 
							borderBottom: '1px dashed rgba(0,0,0,0.3)'
						}}
					>
						sborny@bk.ru
					</a>
				</div>
				<div style={{float: 'right', color: 'rgba(0,0,0,0.5)',}}>
					webpage created by <a href="#" style={{borderBottom: '1px dashed rgba(0,0,0,0.3)'}}>min.web</a>
				</div>
			</Paper>
		)
	}
}
