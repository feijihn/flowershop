import React from 'react';
import Styles from '../styles/Styles.js';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Content from './Content.jsx';
import Divider from 'material-ui/lib/divider';
import $ from 'jquery';
import RaisedButton from 'material-ui/lib/raised-button';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Paper from 'material-ui/lib/paper';

export default class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			cartData: []
		}
		$.ajax({
			url: '/cart',
			dataType: 'json',
			method: 'GET',
			data: {"customerId" : this.props.customerId},
			success: function(data) {
				this.setState({
					cartData : data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	render() {
		return (
			<div className='bodyWrapper'>
				<Grid fluid={true}>
					<Row>
						<Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={10} smOffset={1} xs={12} >
							<Paper className='contentWrapper'>
								<h3 style={{textAlign: 'center', margin: 15, paddingTop: 20}}> Список покупок </h3>
								<Divider />
								<Table>
									<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
										<TableRow>
											<TableHeaderColumn>ID</TableHeaderColumn>
											<TableHeaderColumn>Название</TableHeaderColumn>
											<TableHeaderColumn>Количество</TableHeaderColumn>
											<TableHeaderColumn>Удалить</TableHeaderColumn>
										</TableRow>
									</TableHeader>
									<TableBody displayRowCheckbox={false} showRowHover={true}>
										{this.state.cartData.map( (row, index) => (
											<TableRow>
												<TableRowColumn>{index+1}</TableRowColumn>
												<TableRowColumn>{row.name}</TableRowColumn>
												<TableRowColumn>{row.number}</TableRowColumn>
												<TableRowColumn>
												<FlatButton label={'Удалить'} />
												</TableRowColumn>
											</TableRow>
										))}
									</TableBody>
								</Table>
								<Divider />
								<RaisedButton label="Оформить заказ" style={Styles.orderButton} backgroundColor={Colors.lightGreen200}/>
							</Paper>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
