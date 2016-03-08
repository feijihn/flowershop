import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	HeaderWrapper : {
		display: 'flex',
		display: 'flexbox',
		width: '100%',
		height: 'auto',
		backgroundColor: Colors.white,
		Title:{
			float: 'left',
			height: 'auto',
			Label : {
				fontFamily: '\'Pacifico\', cursive',
				fontSize: '2.5em',
				color: Colors.black,
				lineHeight: '3em',
				marginLeft: 20,
			},
		},
		Navigation: {
			paddingTop: 30,
			paddingBottom: 30,
			margin: '0 auto',
			Buttons: {
				marginTop: 15,
				color: Colors.black,
				fontSize: 11,
				fontWeight: 400,
				minWidth: '0px',
			},
			ButtonActive: {
				borderBottom: '3px solid' + Colors.lightGreenA200,
			},
		},
		Discription: {
			color: Colors.grey600,
			whiteSpace: 'nowrap',
			fontSize: '0.75em',
			marginLeft: 20,
			marginTop: -20,
		},
		Phone: {
			marginLeft: 20,
			marginTop: -5,
			marginBottom: 30,
			color: Colors.pink900,
			textAlign: 'center',
		},
	},
	BodyWrapper:{
		backgroundColor: 'rgba(238,238,238,0.3)',
	},
	HomeWrapper: {
		height: 'auto',
		width: '100%',
		Carousel: {
			maxHeight: '700px',
			overflow: 'hidden',
		},
	},

	ContentWrapper: { 
		backgroundColor: Colors.white,
		marginBottom: 8,
		marginTop: 8,
		CatalogText: {
			paddingTop: 50,
			marginRight:50,
			marginLeft:50,
			paddingBottom: 10,
			boxSizing: 'border-box',
			borderBottom: '1px solid rgba(0,0,0,0.1)',
		},
	},
	Catalog: {
		elementWrapper: {
			height: 250, 
			margin: 10,
			overflow: 'hidden',
		},
		elementOnHover: {
			height: 250, //Must be equal to elementWrapper height
			backgroundColor: 'rgba(0,0,0,0.5)',
			color: 'white',
			textAlign: 'center',
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
		padding: 20,
		display: 'flex',
		minHeight: '500px',
		overflow: 'hidden',
		background: "#333",
		text: {
			fontWeight: 200,
			paddingLeft: 30,
			fontFamily: 'Roboto, sans-serif',
			color: Colors.white,
			lineHeight: '25px',
			width: '12vw',
		},
		GoogleMap: {
			width: '100%',
			border: '2px solid' + Colors.grey500,
		}

	},
}

module.exports = Styles;
