import React from 'react';
import Styles from '../styles/Styles.js';
import Carousel from 'react-responsive-carousel/components/Carousel';
import Slider from 'react-slick';

var data = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg"];

export default class Home extends React.Component {
	render() {
		return (
			<div className={'homepageWrapper'}>
				<div className={'carouselWrapper'}>
					<Carousel 
						axis="horizontal" 
						showThumbs={false} 
						showArrows={true}
					>
						{data.map(function(img) {
							return (
								<div className='carouselWrapper'>
									<img src={img} />
								</div>
							)
						})}
					</Carousel>
				</div>
			</div>
		);
	}
}
