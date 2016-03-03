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
	Catalog: {
		elementWrapper: {
			height: 200,
			width: 200,
			margin: 10,
			textAlign: 'center',
			display: 'inline-block',
		},
		elementOnHover: {
			width: '100%', 
			height: '100%', 
			backgroundColor: 'rgba(225,225,225,0)'
		},
		elementNotOnHover: {
			width: '100%', 
			height: '100%', 
			backgroundColor: 'rgba(225,225,225,0.3)'
		}
	}
}

module.exports = styles;
