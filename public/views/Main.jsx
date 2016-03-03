import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TopMenu from './TopMenu.jsx';
import Content from './Content.jsx';


injectTapEventPlugin(); //needed for material-ui to wrok untill react 1.0.0 would be released

var data = {
	catalogData: [
		{
			title: 'Цветы',
			text: 'эти цветочки просто восхитительны, базарю, еще захочешь',
			img: 'https://static.wixstatic.com/media/9a9509_ba44cdf7e9b24c68bb28e6070dc1f5ce.jpg/v1/fill/w_560,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_ba44cdf7e9b24c68bb28e6070dc1f5ce.jpg',
			price: '420'
		},
		{
			title: 'Цветочки',
			text: 'почему бы тебе не попробовать еще немного этих цветочков?',
			img: 'https://static.wixstatic.com/media/9a9509_04beb86942c343f1adb9684b25657af3.jpg/v1/fill/w_570,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_04beb86942c343f1adb9684b25657af3.jpg',
			price: '930'
		},
		{
			title: 'Цветики',
			text: 'тыкай. тыкай сюда. тыкай',
			img: 'https://static.wixstatic.com/media/9a9509_77e7370d65524b72b19b4de6c0ccc249.jpg/v1/fill/w_493,h_463,al_c,q_90,usm_0.66_1.00_0.01/9a9509_77e7370d65524b72b19b4de6c0ccc249.jpg',
			price: '2320'
		},
		{
			title: 'Цвета',
			text: 'ммм цветоочки',
			img: 'https://static.wixstatic.com/media/9a9509_352585c71ffd48c19cd541f6ca00b513.jpg/v1/fill/w_427,h_446,al_c,q_90,usm_0.66_1.00_0.01/9a9509_352585c71ffd48c19cd541f6ca00b513.jpg',
			price: '1200'
		},
	]
};

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			category: 0,
		};
	};

	menuClicked = (value) => {
		this.setState({
			category: +value,
		});
	};

	render() {
		return (
			<div className={'MainView'}>  
				<TopMenu clickEvent={this.menuClicked} />
				<Content data={data} category={this.state.category} />
			</div>
		)
	}
}
