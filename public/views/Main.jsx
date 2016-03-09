import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Cookie from 'react-cookie';
import Keygen from 'keygen';
import $ from 'jquery';
import data from '../data/Data.js';
import Router from 'react-router-component';



injectTapEventPlugin(); //needed for material-ui to wrok untill react 1.0.0 would be released


export default class Main extends React.Component {
	constructor(props){
		super(props);
			if (!Cookie.load('customerId')) {
				let Exp = Date.now() + 30*24*60*60*1000
				Cookie.save('customerId', Keygen.url(Keygen.small), { path: '/', expires: new Date(new Date().getTime() + 30*24 * 60 * 60 * 1000)});
			}
			this.state = {
				category: 0,
				customerId: Cookie.load('customerId'),
				cartData: [],

			};
	};

	menuClicked = (value) => {
		//this.setState({
			//category: +value,
		//});
		window.location.hash = '/' + value; // REACT-ROUTER or http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/
	};

	addToCart = (title) => {
		$.ajax({
			url: '/cartadd',
			dataType: 'json',
			method: 'post',
			data:{"customerId": this.state.customerId, "title": title},
			success: function(data) {
				this.setState({
					cartData: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};
	render(){
		return (
			<div className={'MainView'}>
				<Header clickEvent={this.menuClicked} />
				<Content addToCart={this.addToCart}/>
				<Footer className={'Footer'} />
			</div>
		)
	};
}
