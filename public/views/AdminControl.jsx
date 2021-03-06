import $ from 'jquery';
import React from 'react';
import Cookie from 'react-cookie';

export default class AdminControl extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				authed: false
			};
	};
	inputUsername = (e) => {
		this.setState({
			username: e.target.value,
		})
	};
	inputPassword = (e) => {
		this.setState({
			password: e.target.value,
		})
	};
	handleAuth = () => {
		$.ajax({
			url: '/login',
			method: 'POST',
			data: {"username" : this.state.username, "password": this.state.password},
			success: (data) => {
				this.setState({
					authed: data
				});
				this.props.adminAuth();
			},
			error: (err) => {
				console.log(err);
			}
		});
	};
	render(){
		if(this.state.authed){
		return(
			<div className={'adminPanel'}>
				
			</div>
		)
		}else{
			return(
			<div>
			<div>
			<label>Username:</label>
			<input type="text" name="username" onChange={this.inputUsername} value={this.state.text}/>
			</div>
			<div>
			<label>Password:</label>
			<input type="password" name="password" onChange={this.inputPassword} value={this.state.text}/>
			</div>
			<div>
			<input type="submit" value="Log In" onClick={this.handleAuth}/>
			</div>
			</div>
			)
		}	
	}
}
