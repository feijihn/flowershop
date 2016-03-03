import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	TopMenuWrapper : {
		height: 'auto',
		width: '100%',
		position: 'relative',
		backgroundColor: Colors.lightGreen100,
		Title:{
			float: 'left',
			width: '20%',
			height: 100,
			Label : {
				fontFamily: '\'Pacifico\', cursive',
				fontSize: '1.75em',
				color: Colors.pink500,
				lineHeight: '3em',
				marginLeft: 50,
			},
		},
		Navigation: {
			paddingTop: 30,
			Buttons: {
				color: Colors.pink900,
				fontSize: 11
			},
			ButtonActive: {
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
