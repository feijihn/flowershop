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

import Dialog from 'material-ui/lib/dialog';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Paper from 'material-ui/lib/paper';

import TextField from 'material-ui/lib/text-field';

export default class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			cartData: [],
			openDialog: false
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

	handleOpen = () => {
		this.setState({openDialog: true});
	};

	handleClose = () => {
		this.setState({openDialog: false});
	};
	
	render() {
		const actions = [
			<FlatButton
				label="Отмена"
				secondary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Заказать"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>,
		];
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
								<RaisedButton 
									label="Оформить заказ" 
									style={Styles.orderButton} 
									backgroundColor={Colors.lightGreen200}
									onTouchTap={this.handleOpen}
								/>
								<Dialog
									title="Контактная информация"
									actions={actions}
									modal={false}
									open={this.state.openDialog}
									onRequestClose={this.handleClose}
								>
									Имя
									<TextField hintText="Имя" />
									E-mail
									<TextField hintText="E-mail" />
									Контактный телефон
									<TextField hintText="Контактный телефон" />
									Адрес доставки
									<TextField hintText="Адрес доставки" />
									Комментарий
									<TextField hintText="Комментарий" multiLine={true} />
								</Dialog>
							</Paper>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
