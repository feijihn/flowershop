import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';

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

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {open: false};
	};

	handleClick = (e) => {
		this.props.clickEvent(e.target.value);
	};
	
	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render(){
		return(
			<Paper className={'Header'} style={Styles.HeaderWrapper}>
				<Grid fluid={true}>
					<Row>
						<Col 
							xs={2} 
							smHidden 
							mdHidden 
							lgHidden
						>
							<i className="material-icons" style={{color: 'black'}} onTouchTap={this.handleToggle}>menu</i>
						</Col>  
						<LeftNav
							docked={false}
							width={200}
							open={this.state.open}
							onRequestChange={open => this.setState({open})}
						>
							<i className="material-icons md-48" style={{color: 'black'}} onTouchTap={this.handleClose}>close</i>
							<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
							<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
						</LeftNav>
						<Col xs={10} sm={12} mdHidden lgHidden>
							<h className={'Label'} style={Styles.HeaderWrapper.Title.Label}>Majorgarden</h>
						</Col>
					</Row>
					<Row>
						<Col xsHidden smHidden md={2} lg={2}>
							<h className={'Label'} style={Styles.HeaderWrapper.Title.Label}>Majorgarden</h>
						</Col>
						<Col xsHidden sm={12} md={10} lg={10}>
						<div className={'Navigation'} style={Styles.HeaderWrapper.Navigation}>

							<FlatButton 
								//linkButton={true} 
								href={'#home'} 
								value={0} 
								label={'Главная'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>
							<FlatButton
								//linkButton={true}
								href={'#bouquets'}
								value={1}	
								label={'Букеты и композиции'}
								style={Styles.HeaderWrapper.Navigation.Buttons}
								onClick={this.handleClick}
							/>
							<FlatButton 
								//linkButton={true} 
								href={'#wedding'} 
								value={2}	
								label={'Свадебная флористика'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>
							<FlatButton 
								//linkButton={true} 
								href={'#liveplants'} //oh fuck how d i came up with this? 
								value={3}	
								label={'Живые растения'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>					
							<FlatButton 
								//linkButton={true} 
								href={'#gifts'} 
								value={4}	
								label={'Подарки и украшения'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>				
							<FlatButton 
								//linkButton={true} 
								href={'#yummy'} //:3 
								value={5}	
								label={'Вкусное'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>					
							<FlatButton 
								//linkButton={true} 
								href={'#aboutus'} 
								value={6}	
								label={'Наш магазин'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>
								<FlatButton 
								//linkButton={true} 
								href={'#payment'} 
								value={7}	
								label={'Оплата и Доставка'} 
								style={Styles.HeaderWrapper.Navigation.Buttons} 
								onClick={this.handleClick} 
							/>
							</div>
							</Col>
						</Row>
					</Grid>
				</Paper>	
		)
	}
}
