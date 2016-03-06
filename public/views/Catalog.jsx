import React from 'react';
import Styles from '../styles/Styles.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactAddonsTransitionGroup from 'react-addons-transition-group';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import data from '../data/Data.js';


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
			zDepth: 2,
			showPreview: false,
			id: this.props.id,
			hoverNext: false,
			hoverPrevious: false,
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
		this.setState({
			showPreview: false,
			id: this.props.id,
		})
	};

	moveNext = () => {
		this.setState({
			id: this.state.id + 1,
		})
	};

	movePrevious = () => {
		this.setState({
			id: this.state.id - 1,
		})
	};

	hoverNext = () => {
		this.setState({
			hoverNext: true,
		})
	};

	hoverPrevious = () => {
		this.setState({
			hoverPrevious: true,
		})
	};

	handleMouseLeaveNavigation = () => {
		this.setState({
			hoverNext: false,
			hoverPrevious: false,
		})
	};

	render() {
		var id = this.props.id;
		var img = this.props.img;
		return (
			<div>
			<Grid fluid={true}>
			<Col lg={5}>
				<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionEnterTimeout={500}><Paper
					style={Styles.Catalog.elementWrapper} 
					zDepth={this.state.zDepth}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					onClick={this.openPreview}
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
				</Paper></ReactCSSTransitionGroup>
			</Col>
				{this.state.showPreview ?
					<div style={Styles.Catalog.preview}>
						<div style={Styles.Catalog.preview.background} onClick={this.closePreview}/>
						<Paper zDepth={5} style={Styles.Catalog.preview.contentContainer}>
							<img src={data.bouquets[this.state.id].img}/>				
						</Paper>
						{this.state.id != data.bouquets.length - 1 ? 
							<div 
								style={this.state.hoverNext ? Styles.Catalog.preview.moveNext.Hover :Styles.Catalog.preview.moveNext}  
								onClick={this.moveNext}
								onMouseEnter={this.hoverNext}
								onMouseLeave={this.handleMouseLeaveNavigation}
							>
								<i className="material-icons md-48" style={{right: '30px', top: '46vh', position: 'fixed'}}>chevron_right</i>
							</div>
						 :null}
						{this.state.id ? 
							<div 
								style={this.state.hoverPrevious ? Styles.Catalog.preview.movePrevious.Hover :Styles.Catalog.preview.movePrevious} 
								onClick={this.movePrevious}
								onMouseEnter={this.hoverPrevious}
								onMouseLeave={this.handleMouseLeaveNavigation}
							>
								<i className="material-icons md-48" style={{left: '30px', top: '46vh', position: 'fixed'}}>chevron_left</i>
							</div> 
						:null}
						<div 
							style={Styles.Catalog.preview.closePreview} 
							onClick={this.closePreview}
						>
							<i className="material-icons md-48" style={{right: '30px', top: '3vh', position: 'fixed'}}>close</i>
						</div> 
					</div>
				:null}
				</Grid>
			</div>
		)
	}
};