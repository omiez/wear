'use strict';

var _imageminWebpackPlugin = require('imagemin-webpack-plugin');

var _imageminWebpackPlugin2 = _interopRequireDefault(_imageminWebpackPlugin);

var _imageminMozjpeg = require('imagemin-mozjpeg');

var _imageminMozjpeg2 = _interopRequireDefault(_imageminMozjpeg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	configureWebpack: {
		plugins: [new _imageminWebpackPlugin2.default({
			// pngquant: ({quality: [0.5, 0.5]}),
			plugins: [(0, _imageminMozjpeg2.default)({ quality: 95 })]
		})]
	}
};
