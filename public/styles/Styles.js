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
	ContentWrapper: { //should be refactored with bootstrap
		minHeight: '70vh', // should be whole page - header. later footer might be added
		width: '70vw',
		marginLeft: '15vw',
	},
	Catalog: {
		elementWrapper: {
			width: '21vw', 
			height: 350, 
			margin: 2,
			display: 'inline-block',
		},
		elementOnHover: {
			position: 'absolute',
			width: '21vw', //Must be equal to elementWrapper width
			height: 350, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.4)',
			color: 'white',
		},
		elementFooter: {
			width: '21vw', //Must be equal to elementWrapper width
			height: 80, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.8)',
			position: 'absolute',
			bottom: '0px'

		}
	}
}

module.exports = Styles;
