const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: {
		index: path.join(__dirname, 'src/jsx/index.jsx')
	},
	output: {
		path: path.join(__dirname, 'dist/js/'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js|jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015'],
					plugins: ['transform-decorators-legacy']
				}
			}, {
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]--[local]--[hash:base64:5]'
					}
				}]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
	]
}