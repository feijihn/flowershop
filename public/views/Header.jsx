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
	};
	
	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render(){
		let buttons = [ 
			{
				linkButton={true}
				href: '#home',
				value: 0,
				label: 'Главная'
			},
			{
				linkButton={true}
				href: '#bouquets',
				value: 1,
				label: 'Букеты и композиции'
			},
			{
				linkButton={true}
				href: '#wedding',
				value: 2,
				label: 'Свадебная флористика'
			},
			{
				linkButton={true}
				href: '#plantsalive',
				value: 3,
				label: 'Живые растения'
			},
			{
				linkButton={true}
				href: '#gifts',
				value: 4,
				label: 'Подарки и украшение'
			},
			{
				linkButton={true}
				href: '#aboutus',
				value: 6,
				label: 'Наш магазин'
			},
			{
				linkButton={true}
				href: '#payment',
				value: 7,
				label: 'Оплата и Доставка'
			},
		];	
		return(
			<Paper className={'Header'} style={Styles.HeaderWrapper}>
				<Grid fluid={true}>
					<Row> 
						<LeftNav
							docked={false}
							width={200}
							open={this.state.open}
							onRequestChange={open => this.setState({open})}
						>
							<i 
								className="material-icons md-36" 
								style={{
									color: 'black',
									marginTop: 42,
									marginLeft: 16,
								}} 
								onTouchTap={this.handleClose}
							>
								close
							</i>
							{buttons.map(function(element, id) {
								return(
									<MenuItem onTouchTap={this.handleClose}>
										<FlatButton  
											href={element.href} 
											value={element.value} 
											label={element.label} 
											style={Styles.HeaderWrapper.Navigation.Buttons} 
											onTouchTap={() => {this.handleClick(element.value)}} 
										/>
									</MenuItem>
								)
							},this)}
						</LeftNav>
						<Col xs={12} sm={12} mdHidden lgHidden style={{textAlign: 'center',}}>
							<i 
								className="material-icons" 
								style={{
									position: 'absolute',
									color: 'black',
									top: 42,
									left: 16,
								}} 
								onTouchTap={this.handleToggle}
							>
								menu
							</i>
							<h className={'Label'} style={Styles.HeaderWrapper.Title.Label}>Majorgarden</h>
							<p style={{color: Colors.pink900, marginLeft: -55, marginTop: -20}}>+7(968)400-41-41</p>
						</Col>
					</Row>
					<Row>
						<Col xsHidden smHidden md={1} lg={2}>
							<h className={'Label'} style={Styles.HeaderWrapper.Title.Label}>Majorgarden</h>
							<p style={Styles.HeaderWrapper.Discription}>Cтудия дизайна цветов и украшений</p>
							<h4 style={Styles.HeaderWrapper.Phone}>+7(968)400-41-41</h4>
						</Col>
						<Col xsHidden smHidden md={10} lg={10}>

				<div className={'Navigation'} style={Styles.HeaderWrapper.Navigation}>
					{buttons.map(function(element, id) {
						return(
								<FlatButton  
									href={element.href} 
									value={element.value} 
									label={element.label} 
									style={Styles.HeaderWrapper.Navigation.Buttons} 
									onTouchTap={() => {this.handleClick(element.value)}} 
								/>
						)
					},this)}
					</div>
					</Col>
						</Row>
					</Grid>
				</Paper>	
		)
	}
}
