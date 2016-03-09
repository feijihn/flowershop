import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	Header : {
		display: 'flex',
		display: 'flexbox',
		width: '100%',
		height: 'auto',
		paddingBottom: 30,
		backgroundColor: Colors.white,
		Title:{
			float: 'left',
			Container: {
				display: 'inline-block',
				verticalAlign: 'middle', 
				height: 140, 
				margin: '20px',
				marginBottom: 0,
			},
			Label : {
				fontFamily: '\'Pacifico\', cursive',
				fontSize: '2.5em',
				color: Colors.black,
				lineHeight: '3em',
				marginLeft: 20,
			},
		},
		Navigation: {
			width: 'calc(100vw - 270px)',
			verticalAlign: 'middle',
			display: 'inline-block',
			textAlign: 'center',
			Buttons: {
				display: 'inline-block',
				color: Colors.black,
				fontSize: 11,
				fontWeight: 400,
			},
			ButtonsMobileVersion: {
				fontSize: 11,
				fontWeight: 400,
				width: '100%',
				height: '100%',
			},
			ButtonActive: {
				display: 'inline-block',
				color: Colors.black,
				backgroundColor: 'rgba(0,0,0,0.165)',
				fontSize: 11,
				fontWeight: 400,
			},
		},
		Discription: {
			color: Colors.grey600,
			whiteSpace: 'nowrap',
			fontSize: '0.75em',
			marginLeft: 25,
			marginTop: -20,
		},
		Phone: {
			color: Colors.pink900,
			marginLeft: 66,
			marginTop: -5
		},
		navIcon: {
			openMenu: {
				position: 'absolute',
				color: 'black',
				top: 42,
				left: 16,
			},
			closeMenu: {
				color: 'black',
				marginTop: 42,
				marginLeft: 16,
			},
		},
	},
	BodyWrapper:{
		backgroundColor: '#333',
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
		marginBottom: 16,
		marginTop: 16,
		minHeight: 668,
		CatalogText: {
			textAlign: 'center',
			paddingTop: 1,
			paddingBottom: 8,
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
			position: 'absolute',
			bottom: 10,
			width: '100%',
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
		},
		mobileVersion: {
			color: 'white',
			width: '100%', 
			backgroundColor: "#333",
			borderBottom: '2px solid white',
		},
	},
	Footer: {
		borderTop: '1px solid rgba(0,0,0,0.3)', 
		padding: 10, 
		width: '100%', 
		textWeight: 900,
		maxHeight: 140,
		fontFamily:'\'Roboto\', sans-serif', 
		fontSize: 15,	
		color: 'rgba(0,0,0,0.7)',
	}
}

module.exports = Styles;
