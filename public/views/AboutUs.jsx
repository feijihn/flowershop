import React from 'react';
import Content from './Content.jsx';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import Styles from '../styles/Styles.js';
import { default as canUseDOM } from "can-use-dom";
import { default as _ } from "lodash";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class AboutUs extends React.Component {
	state = {
		markers: [{
			position: {
				lat: 55.7791206, 
				lng: 37.5594266,
			},
			key: `PLACE`,
			defaultAnimation: 2,
		}],
	}

	constructor(props, context) {
		super(props, context);
		this.handleWindowResize = _.throttle(::this.handleWindowResize, 500);
	}

	componentDidMount() {
		if (!canUseDOM) {
			return;
		}
		window.addEventListener(`resize`, this.handleWindowResize);
	}

	componentWillUnmount() {
		if (!canUseDOM) {
			return;
		}
		window.removeEventListener(`resize`, this.handleWindowResize);
	}

	handleWindowResize() {
		console.log(`handleWindowResize`, this._googleMapComponent);
		triggerEvent(this._googleMapComponent, `resize`);
	}

	/*
	 * This is called when you click on the map.
	 * Go and try click now.
	 */
	handleMapClick(event) {
		let { markers } = this.state;
		markers = update(markers, {
			$push: [
				{
					position: event.latLng,
					defaultAnimation: 2,
					key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
				},
			],
		});
		this.setState({ markers });

		if (markers.length === 3) {
			this.props.toast(
				`Right click on the marker to remove it`,
				`Also check the code!`
			);
		}
	}

	handleMarkerRightclick(index, event) {
		/*
		 * All you modify is data, and the view is driven by data.
		 * This is so called data-driven-development. (And yes, it's now in
		 * web front end and even with google maps API.)
		 */
		let { markers } = this.state;
		markers = update(markers, {
			$splice: [
				[index, 1],
			],
		});
		this.setState({ markers });
	}

	render() {
		return (
			<div className='aboutUs'>
				<Col className="mobileVersion" xs={12} sm={12} mdHidden lgHidden >
					<h2>MAJORGARDEN</h2>
					<p>Россия, Москва, ул. Сущевский Вал д.46</p>
					<p>+7(968)400-41-41</p>
					<p>Мы работаем круглосуточно</p>
				</Col>	
				<div className="container">
					<GoogleMapLoader
						containerElement={
							<div
								{...this.props}
								className='googleMap'
							/>
						}
						googleMapElement={
							<GoogleMap
								ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
								defaultZoom={14}
								defaultCenter={{ lat:55.7926467, lng:37.6104601}}
								onClick={::this.handleMapClick}
							>
								{this.state.markers.map((marker, index) => {
									return (
										<Marker
											{...marker}
											onRightclick={this.handleMarkerRightclick.bind(this, index)}
										/>
									);
								})}
							</GoogleMap>
						}
					/>
					<Col xsHidden smHidden md={4} lg={4}>
						<div className='text'>
							<h2>MAJORGARDEN</h2>
							Россия, Москва, ул. Сущевский Вал д.46<br/>
							+7(968)400-41-41<br/>
							Мы работаем круглосуточно<br/>
						</div>
					</Col>		
				</div>
			</div>
		);
	}
}
