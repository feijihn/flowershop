import React from 'react';

export default class Categories extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
		$.ajax({
			url: '/catalog',
			dataType: 'json',
			data: {"catalog": this.props.catalog},
			success: function(data) {
				this.setState({
					data : data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};

	render() {
		var CategoryElements = this.state.data.map(function(element, id){
			return (
				<Col lg={4} md={6} sm={6} xs={12}>
				<CatalogElement 
				title={element.title}
				img={element.img}
				/>
				</Col>
			)
		}, this);
		return(
			<div className={'bodyWrapper'}>
			<Grid fluid={true}>
			<Row>
			<Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
			<Paper className='contentWrapper'>
			<Grid style={{width:'100%'}}>
			<Row>
			{CategoryElements}
			</Row>
			</Grid>
			</Paper>
			</Col>
			</Row>
			</Grid>
			</div>
		)
	}
}
