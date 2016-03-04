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
		var slideElements = data.Main.map(function(slide, id) {
			return (
				<div style={{
					backgroundColor: 'white', //in case if image isn't loaded
					backgroundImage: 'url(' + slide.img + ')',
					backgroundSize: 'cover',
					height: '70vh',
					backgroundRepeat: 'no-repeat',
				}}>
					<div>
						<h2 style={{marginBottom: 5}}>{slide.title}</h2>
						<p>{slide.text}</p>
					</div>
				</div>
			);
		});
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dotClass: "dotClass",
			fade: true,
			autoplaySpeed: 6000,
			draggable: false
		};
		return (
				<Slider {...settings}>
					{slideElements}
				</Slider>
		);
	}
}
