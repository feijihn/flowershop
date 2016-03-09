import React from 'react';
import Styles from '../styles/Styles.js';
import Keygen from 'keygen';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactAddonsTransitionGroup from 'react-addons-transition-group';
import $ from 'jquery';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Colors from 'material-ui/lib/styles/colors';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';


import ReactSwipe from 'react-swipe';


export default class Catalog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			showPreview: false,
		}
		$.ajax({
			url: '/catalog',
			dataType: 'json',
			data: {"category": this.props.category},
			success: function(data) {
				this.setState({
					data : data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};

	showPreview = (id) => {
		alert('id');
	};

	render() {
		var CatalogElements = this.state.data.map(function(element, id){
			return (
				<Col lg={3} md={6} sm={6} xs={12}>
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
		<div className={'BodyWrapper'} style={Styles.BodyWrapper}>
			<Grid fluid={true}>
			<Row>
			<Col 
			lg={8}  
			lgOffset={2}
			md={8}
			mdOffset={2} 
			sm={10} 
			smOffset={1}
			xs={12}
			>
			<Paper className={'ContentWrapper'} style={Styles.ContentWrapper} responsive>
			<div className={'CatalogText'} style={Styles.ContentWrapper.CatalogText}>
			<h2>Каталог</h2>
			</div>
			<Grid style={{width:'100%'}}>
				<Row>
					{CatalogElements}
				</Row>
			</Grid>
			</Paper>
			</Col>
			</Row>
			</Grid>
			</div>
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

	handleAddToCart = (title) => {
		this.props.addToCart(title);
	};

	render() {

		var id = this.props.id;

		var img = this.props.img;

		var ShowCaption = 
					<div className={'Caption'} style={{backgroundColor: 'rgba(0,0,0,0.4)',height: '80%'}}>
					</div>;
		var HideCaption = 
					<div className={'Caption'} style={{backgroundColor: 'rgba(0,0,0,0)',height: '80%'}}>
					</div>;

		var Element = 					
			<Paper
				style={Styles.Catalog.elementWrapper} 
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>  
				<div style={{height: '250px', backgroundImage: 'url(' + img + ')', overflow: 'hidden'}}>
					{this.state.onHover ?
						<div className={'captionActive'} style={{backgroundColor: 'rgba(0,0,0,0.5)',height: '80%', }}>
							<div style={{margin: 0, textAlign: 'center', color: 'white'}}>
							<h2 style={{margin: 0,}}>№{this.props.id}</h2>
							<h3 style={{margin: 0,}}>{this.props.text}</h3>
							</div>
						</div>
					 : 
						<div className={'captionHidden'} style={{backgroundColor: 'rgba(0,0,0,0)',height: '80%'}} />
					}
					<div className={'captionFooter'} style={{height:'20%', backgroundColor:'rgba(0,0,0,0.7)', color: 'white'}}>
						{this.props.title} {this.props.price} руб -.
							<image src={'../images/icons/add-to-cart.svg'} style={{height:24,width:24}} onClick={()=>{this.props.addToCart(this.props.title)}}></image>
					</div>
				</div>
			</Paper>

		return (
			<div>
				{Element}
			</div>
		)
	}
};

/*class PreviewMode extends React.Component {
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
						<h3 style={{margin: 7, marginTop: 2}}>{this.props.data.bouquets[this.state.id].title}</h3>
						<img src={this.props.data.bouquets[this.state.id].img}/>	
						<p>{this.props.data.bouquets[this.state.id].text} {this.props.data.bouquets[this.state.id].price} руб.</p>			
					</Paper>
					{this.state.id != this.props.data.bouquets.length - 1 ? 
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
};*/
