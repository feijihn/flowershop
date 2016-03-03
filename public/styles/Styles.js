import Colors from 'material-ui/lib/styles/colors';


var styles = {
	TopMenuWrapper : {
		height: 50,
		Title:{
			backgroundColor: Colors.lightGreen100,
			width: '20vw',
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
			width: '80vw',
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
}

module.exports = styles;