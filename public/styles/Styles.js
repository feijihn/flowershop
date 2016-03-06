import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	HeaderWrapper : {
		width: '100%',
		position: 'relative',
		height: 100,
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
				fontSize: 11,
				fontWeight: 400,
			},
			ButtonActive: {
				borderBottom: '3px solid' + Colors.lightGreenA200,
			},
		},
	},
	HomeWrapper: {
		height:'calc(100vh - 100px)',
		width: '100%',
		Carousel: {
			height: '100%',
			overflow: 'hidden',
		},
	},
	ContentWrapper: { //should be refactored with bootstrap
		paddingTop: 4,
		minHeight: "calc(100vh - 100px)", // should be whole page - header. later footer might be added
		width: '70vw',
		marginLeft: '15vw',
		backgroundColor: Colors.grey50
	},
	Catalog: {
		marginLeft: 'auto',
		marginRight: 'auto',
		elementWrapper: {
			width: '23vw', 
			height: 350, 
			margin: 2,
			display: 'inline-block',
		},
		elementOnHover: {
			position: 'absolute',
			width:  '23vw', //Must be equal to elementWrapper width
			height: 350, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.5)',
			color: 'white',
		},
		elementFooter: {
			width: '22vw', //Must be equal to elementWrapper width
			height: 80, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.8)',
			position: 'absolute',
			bottom: '0px',
			color: 'white',
			padding: '1vh'

		}
	},
	orderButton: {
		margin: 20, 
		marginRight: 95, 
		float:'right',
	},
	AboutUsWrapper: {
		height: 'calc(100vh - 100px)',
		padding: 20,
		overflow: 'hidden',
		text: {
			fontWeight: 200,
			paddingLeft: 30,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: '25px',
			width: '12vw',
			float: 'right'
		},
		GoogleMap: {
			height: '80%',
			border: '2px solid' + Colors.grey500,
			minWidth: '570px',
			float:  'left',
		}
	},
}

module.exports = Styles;
