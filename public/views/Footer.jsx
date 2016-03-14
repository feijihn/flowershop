import React from 'react';

export default class Footer extends React.Component {
	render(){
		return(
			<footer>
				<div className="footerContacts">
					<p>©2016. MAJORGARDEN. ALL RIGHTS RESERVED.</p>
					<a href='#' >sborny@bk.ru</a>
				</div>
				<div className="footerAuthors">
					webpage created by <a href="#">min.web</a>
				</div>
			</footer>
		)
	}
}
