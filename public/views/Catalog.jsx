import React from 'react';
import Styles from '../styles/Styles.js'

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';



export default class Catalog extends React.Component {
	render() {
		var CatalogElements = this.props.data.map(function (element, id){
			return (
				<CatalogElement 
					title={element.title}
					text={element.text}
					img={element.img}
					id={id}
					price={element.price}
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
			onHover: false,
			zDepth: 2
		}
	};

	handleMouseEnter = () => {
		this.setState({
			onHover: true,
			zDepth: 5
		})
	};

	handleMouseLeave = () => {
		this.setState({
			onHover: false,
			zDepth: 2
		})
	};

	render() {
		var id = this.props.id;
		var img = this.props.img;
		return (
			<Paper 
				style={Styles.Catalog.elementWrapper} 
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>  
				<div style={{width: '23vw', height: '350px', backgroundImage: 'url(' + img + ')', position: 'absolute'}}>
					{this.state.onHover ?
						<div style={Styles.Catalog.elementOnHover}>
							<h2 style={{textAlign: 'center'}}>№{this.props.id+1}</h2>
							<h3 style={{margin: 7, marginTop: 2}}>{this.props.text}</h3>
						</div>
					:null}
					<div style={Styles.Catalog.elementFooter}>
						{this.props.title} {this.props.price}р
					</div>
				</div>
			</Paper>
		)
	}
};
