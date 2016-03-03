import React from 'react';
import Styles from '../styles/Styles.js';
import Catalog from './Catalog.jsx';

import FlatButton from 'material-ui/lib/flat-button';


export default class TopMenu extends React.Component {
	render(){
		return(
			<div className={'TopMenuWrapper'} style={Styles.TopMenuWrapper}>
				<div className={'Title'} style={Styles.TopMenuWrapper.Title}>
					<h className={'Label'} style={Styles.TopMenuWrapper.Title.Label}>Majorgarden</h>
				</div>
				<div className={'Navigation'} style={Styles.TopMenuWrapper.Navigation}>
					<FlatButton label={'Главная'} style={Styles.TopMenuWrapper.Navigation.Buttons}/>
					<FlatButton	label={'Каталог'} style={Styles.TopMenuWrapper.Navigation.Buttons}/>
					<FlatButton	label={'Оплата и Доставка'} style={Styles.TopMenuWrapper.Navigation.Buttons}/>
				</div>
				<Catalog />
			</div>	
		)
	}
}
