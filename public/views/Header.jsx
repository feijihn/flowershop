import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';
import Colors from 'material-ui/lib/styles/colors';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import LeftNav from 'material-ui/lib/left-nav';
import {Link} from 'react-router-component';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {open: false};
	};

	handleClick = (value) => {
		this.props.clickEvent(value);
		forceReload();
	};
	
	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render(){
		let buttons = [ 
			{
				href: '#/home',
				value: 'home',
				label: 'Главная'
			},
			{
				href: '#/bouquets',
				value: 'bouquets',
				label: 'Букеты и композиции'
			},
			{
				href: '#/wedding',
				value: 'wedding',
				label: 'Свадебная флористика'
			},
			{
				href: '#/liveplants',
				value: 'liveplants',
				label: 'Живые растения'
			},
			{
				href: '#/gifts',
				value: 'gifts',
				label: 'Подарки и украшения'
			},
			{
				href: '#/aboutus',
				value: 'aboutus',
				label: 'Наш магазин'
			},
			{
				href: '#/payment',
				value: 'payment',
				label: 'Корзина'
			},
		];	
		return(
			<Paper className={'Header'} style={Styles.Header}>
				<Grid fluid={true}>
					<Row> 
						<LeftNav
							docked={false}
							width={200}
							open={this.state.open}
							onRequestChange={open => this.setState({open})}
						>
							<i className="material-icons" 
								style={Styles.Header.navIcon.closeMenu} 
								onTouchTap={this.handleClose}
							>close</i>

							{buttons.map(function(element, id) {
								return(
									<MenuItem onTouchTap={() => {this.handleClick(element.value)}}>
										<FlatButton  
											linkButton
											href={element.href} 
											value={element.value} 
											label={element.label} 
											style={Styles.Header.Navigation.ButtonsMobileVersion} 
										/>
									</MenuItem>
								)
							},this)}
						</LeftNav>

						<Col xs={12} sm={12} mdHidden lgHidden style={{textAlign: 'center',}}>

							<i className="material-icons" 
								style={Styles.Header.navIcon.openMenu} 
								onTouchTap={this.handleToggle}
							>menu</i>

							<h1 id="logo">Majorgarden</h1>
							<p style={{color: Colors.pink900, marginLeft: 170, marginTop: -10}}>+7(968)400-41-41</p>
						</Col>

					</Row>
					</Grid>
					<Col xsHidden smHidden style={{textAlign: 'center'}}>
						<div style={Styles.Header.Title.Container}>
							<h1 id="logo">Majorgarden</h1>
							<p style={Styles.Header.Discription}>Cтудия дизайна цветов и украшений</p>
							<h4 style={Styles.Header.Phone}>+7(968)400-41-41</h4>
						</div>
						<div className={'Navigation'} style={Styles.Header.Navigation}>
							{buttons.map(function(element, id) {
								if(this.props.activeButton === element.value){
									return(
										<FlatButton  
										linkButton
										href={element.href} 
										value={element.value} 
										label={element.label} 
										style={Styles.Header.Navigation.ButtonActive} 
										onTouchTap={() => {this.handleClick(element.value)}} 
										/>
									)
								}else{
									return(
										<FlatButton  
										linkButton
										href={element.href} 
										value={element.value} 
										label={element.label} 
										style={Styles.Header.Navigation.Buttons} 
										onTouchTap={() => {this.handleClick(element.value)}} 
										/>
									)
								}
							},this)}
						</div>
					</Col>
			</Paper>	
		)
	}
}
