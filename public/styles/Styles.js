import Colors from 'material-ui/lib/styles/colors';
var styles = {
	TopMenuWrapper : {
		backgroundColor: Colors.red100,
		height: '8vh',
		Title : {
			fontFamily: '\'Pacifico\', cursive',
			fontSize: '1.75em',
			marginLeft: '5%',
			color: Colors.lightGreen600
		},
		Navigation: {
			float: 'right',
			width: '80vw',
			height: '8vh',
			backgroundColor: Colors.red200,
			Buttons: {
				height: '8vh',
				width: 'calc(80vw/3)',
				color: Colors.blue900
			}
		},
	},
}

module.exports = styles;
