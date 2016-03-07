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
			paddingBottom: 30,
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
	ContentWrapper: { 
		minHeight: "calc(100vh - 100px)", // should be whole page - header. later footer might be added
		backgroundColor: Colors.grey50,
		marginBottom: 4,
		marginTop: 4,
	},
	Catalog: {
		elementWrapper: {
			height: 300, 
			margin: 10,
			overflow: 'hidden',
		},
		elementOnHover: {
			height: 300, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.5)',
			color: 'white',
			textAlign: 'center'
		},
		elementFooter: {
			height: 60,
			backgroundColor: 'rgba(0,0,0,0.6)',
			color: 'white',
			textAlign: 'center',
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
			contentContainer: { //gotta center it somehow
				position: 'fixed',
				top: '30vh',
				left: '30vw',
				zIndex: 100,
				padding: 10,
			},
			closePreview: {
				icon: {
					right: '30px', 
					top: '25px', 
					position: 'fixed'
				},
				position: 'fixed',
				top: 0,
				right: 0,
				zIndex: 100,
				width: '120px',
				height: '10vh',
				cursor: 'pointer',
			},
			moveRight: {
				icon: {
					right: '30px', 
					top: '46vh', 
					position: 'fixed'
				},
				Hover: {
					position: 'fixed',
					height: '100vh',
					width: '100px',
					right: 0,
					top: 0,
					zIndex: 100,
					backgroundColor: 'rgba(0,0,0,0.3)',
					display: 'inline-block',
					cursor: 'pointer',
				},
				position: 'fixed',
				height: '100vh',
				width: '100px',
				right: 0,
				top: 0,
				zIndex: 100,
				display: 'inline-block',
				cursor: 'pointer',
			},
			moveLeft: {
				icon: {
					left: '30px', 
					top: '46vh', 
					position: 'fixed'
				},
				Hover: {
					position: 'fixed',
					height: '100vh',
					width: '100px',
					left: 0,
					zIndex: 100,
					backgroundColor: 'rgba(0,0,0,0.3)',
					top: 0,
					display: 'inline-block',
					cursor: 'pointer',
				},
				position: 'fixed',
				height: '100vh',
				width: '100px',
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
