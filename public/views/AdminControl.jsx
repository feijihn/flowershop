import $ from 'jquery';
import React from 'react';

export default class AdminControl extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			authed: false
		};
		$.ajax({
			url: '/login',
			method: 'POST',
			data: {"username" : "root", "password": "root"},
			success: () => {
				this.setState({
					authed: true
				})
			},
			error: (err) => {
				console.log(err);
			}
		});
	};
	render(){
		if(this.state.authed){
		return(
			<div>
			This is admin control page.
			</div>
		)
		}else{
			return(
				<div>
				Not authorized!
				</div>
			)
		}	
	}
}
