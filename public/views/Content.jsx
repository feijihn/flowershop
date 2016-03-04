import React from 'react';
import Styles from '../styles/Styles.js';
import Paper from 'material-ui/lib/paper';

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
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<Catalog data={this.props.data.bouquets} />
					</Paper>
				)
				break;
			case 2:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<Catalog data={this.props.data.wedding} />
					</Paper>
				)
				break;
			case 3:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<Catalog data={this.props.data.liveplants} />
					</Paper>
				)
				break;
			case 4:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<Catalog data={this.props.data.gifts} />
					</Paper>
				)
				break;
			case 5:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<Yummy data={this.props.data.yummy} />
					</Paper>
				)
				break;
			case 6:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<AboutUs />
					</Paper>
				)
				break;
			case 7:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<ShoppingCart data={this.props.data.shoppingcart} />
						{/*<Payment />*/}
					</Paper>
				)
				break;
			case 8:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<ShoppingCart data={this.props.data.shoppingcart} />
					</Paper>
				)
				break;
		}
	}
}
