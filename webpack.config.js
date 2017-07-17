const { resolve } = require('path');
const webpack = require('webpack');

module.exports = (env) => {
	return {
		context: resolve('./src'),
		entry: {
			app: 'index.js'
		},
		output: {
			filename: 'bundle.js',
			path: resolve('./dist'),
			pathinfo: true,
		},
		resolve: {
			extensions: [
				'.js',
				'.jsx',
			],
			modules: ['src'],
		},
		devtool: 'cheap-module-source-map',
		module: {
			rules: []
		},
		plugins: [
		]
	}
};