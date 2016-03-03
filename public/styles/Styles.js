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
	ContentWrapper: { //should be refactored with bootstrap
		minHeight: 'calc(100vh - 50px)', // whole page - header. later footer might be added
		width: '70vw',
		marginLeft: '15vw'
	},
	Catalog: {
		elementWrapper: {
			width: '23vw', 
			height: 350, 
			margin: 2,
			display: 'inline-block',
		},
		elementOnHover: {
			position: 'absolute',
			width: '23vw', //Must be equal to elementWrapper width
			height: 350, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.4)',
			color: 'white',
		},
		elementFooter: {
			width: '23vw', //Must be equal to elementWrapper width
			height: 80, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.8)',
			position: 'absolute',
			bottom: '0px'

		}
	}
}

module.exports = Styles;
