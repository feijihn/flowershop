import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	HeaderWrapper : {
		width: '100%',
		height: 'auto',
		backgroundColor: Colors.lightGreen100,
		Title:{
			float: 'left',
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
	HomeWrapper: {
		minHeight:"80vh",
		width: '100%',
	},
	ContentWrapper: { //should be refactored with bootstrap
		paddingTop: 4,
		minHeight: "calc(100vh - 100px)", // should be whole page - header. later footer might be added
		backgroundColor: Colors.grey50
	},
	Catalog: {
		elementWrapper: {
			height: 350, 
			margin: 3,
			display: 'inline-block',
			boxSizing: 'content-box',
			overflow: 'hidden',
		},
		elementOnHover: {
			position: 'absolute',
			width:  '23vw', //Must be equal to elementWrapper width
			height: 350, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.5)',
			color: 'white',
		},
		elementFooter: {
			width: '23vw', //Must be equal to elementWrapper width
			height: 80, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.8)',
			position: 'absolute',
			bottom: '0px',
			color: 'white'
		},
		preview: {
			background: {
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0,0,0,0.7)',
				zIndex: 99,
			},
			contentContainer: {
				position: 'fixed',
				top: '30vh',
				left: '30vw',
				zIndex: 100,
				padding: 10,
			},
			closePreview: {
				position: 'fixed',
				top: 0,
				right: 0,
				zIndex: 100,
				width: '120px',
				height: '10vh',
				cursor: 'pointer',
			},
			moveNext: {
				Hover: {
					position: 'fixed',
					height: '100vh',
					width: '120px',
					right: 0,
					top: 0,
					zIndex: 100,
					backgroundColor: 'rgba(0,0,0,0.3)',
					display: 'inline-block',
					cursor: 'pointer',
				},
				position: 'fixed',
				height: '100vh',
				width: '120px',
				right: 0,
				top: 0,
				zIndex: 100,
				display: 'inline-block',
				cursor: 'pointer',
			},
			movePrevious: {
				Hover: {
					position: 'fixed',
					height: '100vh',
					width: '120px',
					left: 0,
					zIndex: 100,
					backgroundColor: 'rgba(0,0,0,0.3)',
					top: 0,
					display: 'inline-block',
					cursor: 'pointer',
				},
				position: 'fixed',
				height: '100vh',
				width: '120px',
				left: 0,
				zIndex: 100,
				top: 0,
				display: 'inline-block',
				cursor: 'pointer',
			},
		}
	},
	orderButton: {
		margin: 20, 
		marginRight: 95, 
		float:'right',
	},
	AboutUsWrapepr: {
		textWrapper: {
			backgroundColor: 'rgba(0,0,0,0.85)',
			height: 'auto',
			position: 'absolute',
			zIndex: 9,
			padding: '10px'
		},
		text: {
			color: Colors.white,
			fontWeight: 200	
		}
	},
}

module.exports = Styles;
