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

import Divider from 'material-ui/lib/divider';
import RaisedButton from 'material-ui/lib/raised-button';


export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
	      <div>
	      	<h3 style={{textAlign: 'center', margin: 15}}> Список покупок </h3>
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
					  	{this.props.data.map( (row, index) => (
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
				</div>
      )
    }
}
