import React from 'react';

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

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';


export default class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			cartData: [],
			openDialog: false,
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
											<TableHeaderColumn>Название</TableHeaderColumn>
											<TableHeaderColumn>Стоимость(за шт.)</TableHeaderColumn>
											<TableHeaderColumn>Количество</TableHeaderColumn>
											<TableHeaderColumn>Удалить</TableHeaderColumn>
										</TableRow>
									</TableHeader>
									<TableBody displayRowCheckbox={false} showRowHover={true}>
										{this.state.cartData.map( (row, index) => (
											<TableRow>
												<TableRowColumn>{row.name}</TableRowColumn>
												<TableRowColumn>{row.price}</TableRowColumn>
												<TableRowColumn>{row.number}</TableRowColumn>
												<TableRowColumn>
												<FlatButton label={'Удалить'} />
												</TableRowColumn>
											</TableRow>
										))}
									</TableBody>
								</Table>
								<Divider />

								<Dialog
									title="Контактная информация"
									actions={actions}
									modal={false}
									open={this.state.openDialog}
									onRequestClose={this.handleClose}
								>
									<TextField floatingLabelText="Имя" multiLine={true} fullWidth={true} />
									<TextField floatingLabelText="E-mail" multiLine={true} fullWidth={true} />
									<TextField floatingLabelText="Контактный телефон" multiLine={true} fullWidth={true} />
									<TextField floatingLabelText="Адрес доставки" multiLine={true} fullWidth={true} />
									<TextField floatingLabelText="Комментарий" multiLine={true} fullWidth={true} />
								</Dialog>

								<div className="shoppingCartFooter">
									<RadioButtonGroup name="Доставка" className="radioButtonGroup">
										<RadioButton
											value="1"
											label="Самовывоз м. Марьина Роща - Бесплатно"
										/>
										<RadioButton
											value="2"
											label="Доставка букетов по Москве в пределах МКАД - 500р."
										/>
										<RadioButton
											value="3"
											label="Доставка СВАДЕБНЫХ БУКЕТОВ в пределах МКАД - 800р."
										/>
										<RadioButton
											value="4"
											label="Доставка букетов за МКАД, далее +50 руб./км - 1000р."
										/>
									</RadioButtonGroup>
									<RaisedButton 
										className="orderButton"
										label="Оформить заказ" 
										backgroundColor={Colors.lightGreen200}
										onTouchTap={this.handleOpen}
									/>
								</div>
							</Paper>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
