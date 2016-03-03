import React from 'react';
import Styles from '../styles/Styles.js';

import Home from './Home.jsx';
import Catalog from './Catalog.jsx';
import Yummy from './Yummy.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Payment from './Payment.jsx';
import AboutUs from './AboutUs.jsx';

export default class Content extends React.Component {
	constructor(props) {
		super(props)
	};
	render(){
		switch (this.props.category) {
			case 0:
				return(
				<div className={'MainContentWrapper'}>
					<Home />
				</div>
				)
				break;
			case 1:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Catalog data={this.props.data.bouquets} />
				</div>
				)
				break;
			case 2:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Catalog data={this.props.data.wedding} />
				</div>
				)
				break;
			case 3:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Catalog data={this.props.data.liveplants} />
				</div>
				)
				break;
			case 4:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Catalog data={this.props.data.gifts} />
				</div>
				)
				break;
			case 5:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Yummy data={this.props.data.yummy} />
				</div>
				)
				break;
			case 6:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<AboutUs />
				</div>
				)
				break;
			case 7:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<Payment />
				</div>
				)
				break;
			case 8:
				return(
				<div className={'ContentWrapper'} style={Styles.ContentWrapper}>
					<ShoppingCart />
				</div>
				)
				break;
		}
	}
}
