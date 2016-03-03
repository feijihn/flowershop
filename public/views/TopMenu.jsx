import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';

import FlatButton from 'material-ui/lib/flat-button';


export default class TopMenu extends React.Component {
	constructor(props){
		super(props);
	};

	handleClick = (e) => {
		this.props.clickEvent(e.target.value);
	};

	render(){
		return(
			<div className={'TopMenuWrapper'} style={Styles.TopMenuWrapper}>
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
					 	href={'#catalog'}
					 	value={1}	
						label={'Каталог'}
					 	style={Styles.TopMenuWrapper.Navigation.Buttons}
					 	onClick={this.handleClick}
					/>
					<FlatButton 
						//linkButton={true} 
						href={'#payment'} 
						value={2}	
						label={'Оплата и Доставка'} 
						style={Styles.TopMenuWrapper.Navigation.Buttons} 
						onClick={this.handleClick} 
					/>
				</div>
			</div>	
		)
	}
}
