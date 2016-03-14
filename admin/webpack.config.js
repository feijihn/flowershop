
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/src');
var APP_DIR = path.resolve(__dirname, 'public');

var config = {
	entry: {
		admin: APP_DIR + '/Index.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		alias: {},
		extensions: ['', '.jsx', '.js']
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{ test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
};

module.exports = config;
