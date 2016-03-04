import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';


export default class TopMenu extends React.Component {
	constructor(props){
		super(props);
	};

	handleClick = (e) => {
		this.props.clickEvent(e.target.value);
	};

	render(){
		return(
			<Paper className={'TopMenuWrapper'} style={Styles.TopMenuWrapper}>
				<div className={'Title'} style={Styles.TopMenuWrapper.Title}>
					<h className={'Label'} style={Styles.TopMenuWrapper.Title.Label}>Majorgarden</h>
				</div>
				<div className={'Navigation'} style={Styles.TopMenuWrapper.Navigation}>
					<FlatButton 
						//linkButton={true} 
						href={'#home'} 
						value={0} 
						label={'Главная'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>
					<FlatButton
						//linkButton={true}
					 	href={'#bouquets'}
					 	value={1}	
						label={'Букеты и композиции'}
					 	style={Styles.TopMenuWrapper.Navigation.Buttons}
					 	onClick={this.handleClick}
					/>
					<FlatButton 
						//linkButton={true} 
						href={'#wedding'} 
						value={2}	
						label={'Свадебная флористика'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>
					<FlatButton 
						//linkButton={true} 
						href={'#liveplants'} //oh fuck how d i came up with this? 
						value={3}	
						label={'Живые растения'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>					
					<FlatButton 
						//linkButton={true} 
						href={'#gifts'} 
						value={4}	
						label={'Подарки и украшения'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>				
					<FlatButton 
						//linkButton={true} 
						href={'#yummy'} //:3 
						value={5}	
						label={'Вкусное'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>					
					<FlatButton 
						//linkButton={true} 
						href={'#aboutus'} 
						value={6}	
						label={'Наш магазин'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>
						<FlatButton 
						//linkButton={true} 
						href={'#payment'} 
						value={7}	
						label={'Оплата и Доставка'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>
					</div>
			</Paper>	
		)
	}
}
