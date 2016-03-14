import Colors from 'material-ui/lib/styles/colors';


var Styles = {
	Header : {
		button: {
			display: 'inline-block',
			color: Colors.black,
			fontSize: 11,/*
			borderBottom: '1px rgba(0,0,0,0.1) solid',*/
		},
		buttonActive: {
			backgroundColor: 'rgba(0,0,0,0.1)',
			display: 'inline-block',
			color: Colors.black,
			fontSize: 11,/*
			borderBottom: '2px rgba(0,0,0,0.5) solid',*/
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
}

module.exports = Styles;
