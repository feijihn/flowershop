import React from 'react';
import Styles from '../styles/Styles.js'

import Paper from 'material-ui/lib/paper';

var data = {
	catalogData: [
		{
			title: '1',
			text: '',
			img: 'https://static.wixstatic.com/media/9a9509_ba44cdf7e9b24c68bb28e6070dc1f5ce.jpg/v1/fill/w_560,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_ba44cdf7e9b24c68bb28e6070dc1f5ce.jpg',
		},
		{
			title: '2',
			text: '',
			img: 'https://static.wixstatic.com/media/9a9509_04beb86942c343f1adb9684b25657af3.jpg/v1/fill/w_570,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_04beb86942c343f1adb9684b25657af3.jpg',
		},
		{
			title: '3',
			text: '',
			img: 'https://static.wixstatic.com/media/9a9509_77e7370d65524b72b19b4de6c0ccc249.jpg/v1/fill/w_493,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_77e7370d65524b72b19b4de6c0ccc249.jpg',
		},
		{
			title: '4',
			text: '',
			img: 'https://static.wixstatic.com/media/9a9509_352585c71ffd48c19cd541f6ca00b513.jpg/v1/fill/w_427,h_446,al_c,q_90,usm_0.66_1.00_0.01/9a9509_352585c71ffd48c19cd541f6ca00b513.jpg',
		},
	]
};

export default class Catalog extends React.Component {
	render() {
		var CatalogElements = data.catalogData.map(function (element, id){
			return (
				<CatalogElement 
					title={element.title}
					text={element.text}
					img={element.img}
				/>
			)
		});
		return (
			<div>  
				{CatalogElements}
			</div>
		)
	}
};



class CatalogElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zDepth: 1
		}
	};

	handleMouseEnter = () => {
		this.setState({
			zDepth: 5
		})
	};

	handleMouseLeave = () => {
		this.setState({
			zDepth: 1
		})
	};

	render() {
		return (
			<Paper 
				style={Styles.Catalog.elementWrapper} 
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>  
				{this.props.title}
			</Paper>

		)
	}
};
