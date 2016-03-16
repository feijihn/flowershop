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
			data: {
				"items":[

				],
				"categories":[

				],
			},
			category: null,
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
	
	changeCategory = (category) => {
		this.setState({
			category: category
		});
	};

	render() {
		var CatalogElements = this.state.data.items.map((element, id) => {
			if(element.category === this.state.category){
				return (
					<Col lg={4} md={6} sm={6} xs={12}>
						<CatalogElement 
							title={element.title}
							text={element.text}
							img={element.img}
							id={id}
							price={element.price}
							addToCart={this.props.addToCart}
							key={id}
						/>
					</Col>
				)
			}
		});
		var Categories = this.state.data.categories.map((category, id) => {
			if(!this.state.category){
			return(
				<Col lg={6} md={6} sm={6} xs={12}>
					<CategoryElement
						name={category.name}
						changeCategory={this.changeCategory}
					>
					</CategoryElement>
				</Col>
			)
		}});
		return (
			<div className="catalog">
				<div className='bodyWrapper'>
					<Grid fluid={true}>
						<Row>
							<Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
								<Paper className='contentWrapper'>
									<FlatButton onTouchTap={() => {this.changeCategory(null)}} label={'Назад'} />
									<div className='catalogTitle'>
										<h2>Каталог</h2>
									</div>
									<Grid style={{width:'100%'}}>
										<Row>
											{Categories}
										</Row>
										<Row>
											{CatalogElements}
										</Row>
									</Grid>
								</Paper>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
};

class CategoryElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onHover: false,
			zDepth: 1,
			showPreview: false,
			id: this.props.id,
		}
	};

	handleMouseEnter = () => {
		this.setState({
			onHover: true,
			zDepth: 1,
		})
	};

	handleMouseLeave = () => {
		this.setState({
			onHover: false,
			zDepth: 3,
		})
	};

	handleClick = () => {
		this.props.changeCategory(this.props.name);
	};

	render() {
		var Element = 					
			<Paper
				className='catalogElementWrapper'
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				onTouchTap={this.handleClick}
			>  
				<div style={{height: '250px', backgroundColor: 'rgba(77,77,77,0.3)', overflow: 'hidden'}}>
							<div className='text' style={{textAlign:'center', marginTop: 105, fontSize: 20}}>
								{this.props.name}
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


class CatalogElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onHover: false,
			zDepth: 1,
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
			zDepth: 1,
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
				className='catalogElementWrapper'
				zDepth={this.state.zDepth}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>  
				<div style={{height: '250px', backgroundImage: 'url(' + img + ')', overflow: 'hidden'}}>
					{this.state.onHover ?
						<div className='captionActive'>
							<div className='text'>
								<h2 className='marginFix'>№{this.props.id+1}</h2>
								<h3 className='marginFix'>{this.props.text}</h3>
							</div>
						</div>
					 : 
						<div className='captionHidden' />
					}
					<div className={'captionFooter'}>
						<p>{this.props.title}
							<image 
								src={'../images/icons/add-to-cart.svg'} 
								className="icon"
								onClick={()=>{this.props.addToCart(this.props.title)}}
							/>
						</p> 
						<p>{this.props.price} руб -.</p>
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
