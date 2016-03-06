import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';


export default class Header extends React.Component {
	constructor(props){
		super(props);
	};

	handleClick = (value) => {
		this.props.clickEvent(value);
	};

	render(){
		return(
			<Paper className={'Header'} style={Styles.HeaderWrapper}>
				<div className={'Title'} style={Styles.HeaderWrapper.Title}>
					<h className={'Label'} style={Styles.HeaderWrapper.Title.Label}>Majorgarden</h>
				</div>
				<div className={'Navigation'} style={Styles.HeaderWrapper.Navigation}>
					<FlatButton 
						//linkButton={true} 
						href={'#home'} 
						value={0} 
						label={'Главная'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(0)}} 
					/>
					<FlatButton
						//linkButton={true}
					 	href={'#bouquets'}
					 	value={1}	
						label={'Букеты и композиции'}
					 	style={Styles.HeaderWrapper.Navigation.Buttons}
					 	onTouchTap={() => {this.handleClick(1)}}
					/>
					<FlatButton 
						//linkButton={true} 
						href={'#wedding'} 
						value={2}	
						label={'Свадебная флористика'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(2)}} 
					/>
					<FlatButton 
						//linkButton={true} 
						href={'#plantsalive'} //oh fuck how d i came up with this? 
						value={3}	
						label={'Живые растения'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(3)}} 
					/>					
					<FlatButton 
						//linkButton={true} 
						href={'#gifts'} 
						value={4}	
						label={'Подарки и украшения'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(4)}} 
					/>				
					<FlatButton 
						//linkButton={true} 
						href={'#yummy'} //:3 
						value={5}	
						label={'Вкусное'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(5)}} 
					/>					
					<FlatButton 
						//linkButton={true} 
						href={'#aboutus'} 
						value={6}	
						label={'Наш магазин'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(6)}} 
					/>
						<FlatButton 
						//linkButton={true} 
						href={'#payment'} 
						value={7}	
						label={'Оплата и Доставка'} 
						style={Styles.HeaderWrapper.Navigation.Buttons} 
						onTouchTap={() => {this.handleClick(7)}} 
					/>
					</div>
			</Paper>	
		)
	}
}
