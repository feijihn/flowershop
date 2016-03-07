import React from 'react';
import Styles from '../styles/Styles.js';
import Keygen from 'keygen';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactAddonsTransitionGroup from 'react-addons-transition-group';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import data from '../data/Data.js';


import ReactSwipe from 'react-swipe';


export default class Catalog extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		var CatalogElements = this.props.data.map(function(element, id){
			return (
				<Col lg={4} md={6} sm={6} xs={12}>
					<CatalogElement 
						title={element.title}
						text={element.text}
						img={element.img}
						id={id}
						price={element.price}
						responsive
						addToCart={this.props.addToCart}
					/>
				</Col>
			)
		}, this);
		return (
			<Grid style={{width:'100%'}}>
				<Row>
					{CatalogElements}
				</Row>
			</Grid>
		)
	}
};


class CatalogElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onHover: false,
			zDepth: 2,
			showPreview: false,
			id: this.props.id,
		}
	};

	handleMouseEnter = () => {
		this.setState({
			onHover: true,
			zDepth: 5,
		})
	};

	handleMouseLeave = () => {
		this.setState({
			onHover: false,
			zDepth: 2,
		})
	};

	openPreview = () => {
		this.setState({
			showPreview: true,
		})
	};

	closePreview = () => {
		this.setState ({
			showPreview: false,
		})
	};

	handleAddToCart = (title) => {
		this.props.addToCart(title);
	};

	render() {

		var id = this.props.id;

		var img = this.props.img;

		var Element = 					
			<Paper
				style={Styles.Catalog.elementWrapper} 
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				onTouchTap={this.openPreview}
			>  
				<div style={{height: '300px', backgroundImage: 'url(' + img + ')', overflow: 'hidden'}}>
					{this.state.onHover ?
						<div style={Styles.Catalog.elementOnHover}>
							<h2>№{this.props.id+1}</h2>
							<h3 style={{margin: 7, marginTop: 2}}>{this.props.text}</h3>
						</div>
					:null}
					<div style={Styles.Catalog.elementFooter}>
						{this.props.title} {this.props.price} руб.
						<i className="material-icons" onTouchTop={() => {this.handleAddToCart(this.props.title)}} style={{cursor:'pointer',float: 'right'}}>add_shopping_cart</i>
					</div>
				</div>
			</Paper>;

		return (
			<div>
				{Element}
				{this.state.showPreview ? 
					<PreviewMode 
						closePreview={this.closePreview} 
						id={this.state.id}
					/> 
				:null}
			</div>
		)
	}
};

class PreviewMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			hoverLeft: false,
			hoverRight: false,
		}
	};

	moveLeft = () => {
		this.setState ({
			id: this.state.id - 1
		})
	};

	moveRight = () => {
		this.setState ({
			id: this.state.id + 1
		})
	};

	hoverLeft = () => {
		this.setState({
			hoverLeft: true,
		})
	};

	hoverRight = () => {
		this.setState({
			hoverRight: true,
		})
	};

	unHover = () => {
		this.setState({
			hoverLeft: false,
			hoverRight: false,			
		})
	};

	render() {
		return (
		<div>
			<div style={Styles.Catalog.preview}>
				<div style={Styles.Catalog.preview.background} onTouchTap={this.props.closePreview}/>
				<Paper 
					id="previewMode"
					zDepth={5} 
					style={{
						position: 'fixed',
						top: '50vh',
						left: '50vw',
						transform: 'translate(-50%, -50%)',
						zIndex: 100,
						textAlign: 'center'
				}}>
					<h2>№{this.state.id+1}</h2>
					<h3 style={{margin: 7, marginTop: 2}}>{data.bouquets[this.state.id].title}</h3>
					<img src={data.bouquets[this.state.id].img}/>	
					<p>{data.bouquets[this.state.id].text} {data.bouquets[this.state.id].price} руб.</p>			
				</Paper>
				{this.state.id != data.bouquets.length - 1 ? 
					<div 
						style={this.state.hoverRight ? Styles.Catalog.preview.moveRight.Hover :Styles.Catalog.preview.moveRight}  
						onTouchTap={this.moveRight}
						onMouseEnter={this.hoverRight}
						onMouseLeave={this.unHover}
					>
						<i className="material-icons md-48" style={Styles.Catalog.preview.moveRight.icon}>chevron_right</i>
					</div>
				:null}
				{this.state.id ? 
					<div 
						style={this.state.hoverLeft ? Styles.Catalog.preview.moveLeft.Hover :Styles.Catalog.preview.moveLeft} 
						onTouchTap={this.moveLeft}
						onMouseEnter={this.hoverLeft}
						onMouseLeave={this.handleMouseLeaveNavigation}
					>
						<i className="material-icons md-48" style={Styles.Catalog.preview.moveLeft.icon}>chevron_left</i>
					</div> 
				:null}
				<div 
					style={Styles.Catalog.preview.closePreview} 
					onTouchTap={this.props.closePreview}
				>
					<i className="material-icons md-48" style={Styles.Catalog.preview.closePreview.icon}>close</i>
				</div> 
			</div>
		</div>
		)
	}
};
