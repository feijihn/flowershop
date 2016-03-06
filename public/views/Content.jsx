import React from 'react';
import Styles from '../styles/Styles.js';
import Paper from 'material-ui/lib/paper';

import Home from './Home.jsx';
import Catalog from './Catalog.jsx';
import Yummy from './Yummy.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Payment from './Payment.jsx';
import AboutUs from './AboutUs.jsx';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Colors from 'material-ui/lib/styles/colors';

export default class Content extends React.Component {
	constructor(props) {
		super(props)
	};
	render(){
		switch (this.props.category) {
			case 0:
				return(
					<Home />
				)
				break;
			case 1:
				return(

					<Grid fluid={true} style={{backgroundColor: Colors.grey200}}>
						<Row>
							<Col 
								lg={8}  
								lgOffset={2}
								md={8}
								mdOffset={2} 
								sm={10} 
								smOffset={1}
								xs={12}
							>
								<Paper className={'ContentWrapper'} style={Styles.ContentWrapper} responsive>
									<Catalog data={this.props.data.bouquets} />
								</Paper>
							</Col>
						</Row>
					</Grid>
				)
				break;
			case 2:
				return(

					<Grid fluid={true} style={{backgroundColor: Colors.grey200}}>
						<Row>
							<Col 
								lg={8}  
								lgOffset={2}
								md={8}
								mdOffset={2} 
								sm={10} 
								smOffset={1}
								xs={12}
							>
						<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
							<Catalog data={this.props.data.wedding} />
						</Paper>
							</Col>
						</Row>
					</Grid>
				)
				break;
			case 3:
				return(

					<Grid fluid={true} style={{backgroundColor: Colors.grey200}}>
						<Row>
							<Col 
								lg={8}  
								lgOffset={2}
								md={8}
								mdOffset={2} 
								sm={10} 
								smOffset={1}
								xs={12}
							>
						<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
							<Catalog data={this.props.data.liveplants} />
						</Paper>
							</Col>
						</Row>
					</Grid>
				)
				break;
			case 4:
				return(

					<Grid fluid={true} style={{backgroundColor: Colors.grey200}}>
						<Row>
							<Col 
								lg={8}  
								lgOffset={2}
								md={8}
								mdOffset={2} 
								sm={10} 
								smOffset={1}
								xs={12}
							>
						<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
							<Catalog data={this.props.data.gifts} />
						</Paper>
							</Col>
						</Row>
					</Grid>
				)
				break;
			case 5:
				return(
					<Grid fluid={true} style={{backgroundColor: Colors.grey200}}>
						<Row>
							<Col 
								lg={8}  
								lgOffset={2}
								md={8}
								mdOffset={2} 
								sm={10} 
								smOffset={1}
								xs={12}
							>
						<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
							<Yummy data={this.props.data.yummy} />
						</Paper>
							</Col>
						</Row>
					</Grid>
				)
				break;
			case 6:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<AboutUs />
					</Paper>
				)
				break;
			case 7:
				return(
					<Paper className={'ContentWrapper'} style={Styles.ContentWrapper}>
						<ShoppingCart data={this.props.cartData} />
						{/*<Payment />*/}
					</Paper>
				)
				break;
			default:
				return false;
				break;
		}
	}
}
