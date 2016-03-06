import React from 'react';
import Styles from '../styles/Styles.js';
import Carousel from 'react-responsive-carousel/components/Carousel';
import Slider from 'react-slick';

var data = {
	Main: [
		{
			img: '../images/1.jpg',
			title: '',
			text: '',
		},
		{
			img: '../images/2.jpg',
			title: '',
			text: '',
		},
	],
};

export default class Events extends React.Component {
	render() {
		return (
				<div className={'CarouselWrapper'} style={Styles.HomeWrapper.Carousel}>
				<Carousel 
				axis="horizontal" 
				showThumbs={false} 
				showArrows={true}
				>
                <div>
                    <img src="../images/1.jpg" />
                </div>
                <div>
                    <img src="../images/2.jpg" />
                </div>
                <div>
                    <img src="../images/3.jpg" />
                </div>
            </Carousel>
				</div>
		);
	}
}
