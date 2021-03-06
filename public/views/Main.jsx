import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Cookie from 'react-cookie';
import Keygen from 'keygen';
import $ from 'jquery';
import Router from 'react-router-component';

//This is an abroad comment i made to keep the streak on github. Enjoy life, enjoy streaks, enjoy stats, get 60 bucks per minute!

injectTapEventPlugin(); //needed for material-ui to wrok untill react 1.0.0 would be released


export default class Main extends React.Component {
	constructor(props){
		super(props);
			if (!Cookie.load('customerId')) {
				let Exp = Date.now() + 30*24*60*60*1000
				Cookie.save('customerId', Keygen.url(Keygen.small), { path: '/', expires: new Date(new Date().getTime() + 30*24 * 60 * 60 * 1000)});
			}
			this.state = {
				category: window.location.hash.substring(2) || 'home',
				customerId: Cookie.load('customerId'),
				cartData: [],
				admin: false,
			};
			if(Cookie.load('adminSession')){
				console.log('IS ADMIN');
				this.setState({
					admin: true
				})
			}
	};

	menuClicked = (value) => {
		this.setState({
			category: value,
		});
		window.location.hash = '/' + value; // REACT-ROUTER or http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/
	};

	addToCart = (title) => {
		$.ajax({
			url: '/cartadd',
			dataType: 'json',
			method: 'post',
			data:{"customerId": this.state.customerId, "title": title},
			success: (data) => {
			},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	};
	adminAuth = () => {
		Cookie.save('adminSession', Keygen.url(Keygen.small), { path: '/', expires: new Date(new Date().getTime() + 60 * 60 * 1000)});
		this.setState({
			admin: true
		})
	};
	render(){
		return (
			<div className={'MainView'} >
				<Header clickEvent={this.menuClicked} activeButton={this.state.category}/>
				<Content addToCart={this.addToCart} customerId={this.state.customerId} adminAuth={this.adminAuth} isAdmin={this.state.admin}/>
				<Footer className={'Footer'} />
			</div>
		)
	};
}
