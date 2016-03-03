import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	TopMenuWrapper : {
		height: 50,
		Title:{
			backgroundColor: Colors.lightGreen100,
			width: '20%',
			float: 'left',
			textAlign: 'center',
			Label : {
				fontFamily: '\'Pacifico\', cursive',
				fontSize: '1.75em',
				color: Colors.pink500,
			},
		},
		Navigation: {
			float: 'right',
			width: '80%',
			height: 50,
			backgroundColor: Colors.lightGreen200,
			Buttons: {
				height: 50,
				width: 'calc(80vw/3)',
				color: Colors.pink900
			},
			ButtonActive: {
				height: 50,
				width: 'calc(80vw/3)',
				borderBottom: '3px solid' + Colors.lightGreenA200,
			},
		},
	},
	Catalog: {
		elementWrapper: {
			width: 300, 
			height: 350, 
			margin: 5,
			display: 'inline-block',
		},
		elementOnHover: {
			position: 'absolute',
			width: 300, //Must be equal to elementWrapper width
			height: 350, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.4)',
			color: 'white',
		},
	}
}

module.exports = Styles;
