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

import Badge from 'material-ui/lib/badge';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {open: false};
	};

	handleClick = (value) => {
		this.props.clickEvent(value);
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
	            <div className="header">
	                <Col className="mobileNavigation"
	                xs={12} sm={12} mdHidden lgHidden
	                onTouchTap={this.handleToggle}>
	                    МЕНЮ
	                </Col>
	                {this.state.open ?
	                    <div className="mobileNavigationMenu">
	                        {buttons.map(function(element, id) {
	                            return(
	                                <MenuItem onTouchTap={() => {this.handleClick(element.value)}}>
	                                    <FlatButton  
	                                        linkButton
	                                        href={element.href}
	                                        value={element.value}
	                                        label={element.label}
	                                        key={id}
	                                    />
	                                </MenuItem>
	                            )
	                        },this)}
	                    </div>
	                :null}
	                <div className="headerContent">
	                    <div className="headerLogo">
	                        <h1 id="logo">Majorgarden</h1>
	                        <p id="description">Cтудия дизайна цветов и украшений</p>
	                        <p id="phone">+7 968 400-41-41</p>
	                    </div>
	                    <Col className="headerNavigation" xsHidden smHidden >
	                        {buttons.map(function(element, id) {
	                            return(
	                                <FlatButton  
	                                    linkButton
	                                    href={element.href}
	                                    value={element.value}
	                                    label={element.label}
	                                    style={this.props.activeButton === element.value ? Styles.Header.buttonActive : Styles.Header.button}
	                                    onTouchTap={() => {this.handleClick(element.value)}}
	                                    key={id}
	                                />
	                            )
	                        },this)}
	                    </Col>
	                </div>
	            </div>
		)
	}
}
/*
					<Badge
						badgeContent={4}
						primary={true}
					>
						<MenuItem onTouchTap={() => {this.handleClick('payment')}}>
							<FlatButton  
								linkButton
								href= '#/payment'
								value= 'payment'
								label= 'Корзина'
								key={6}
							/>
						</MenuItem>
					</Badge>
*/				