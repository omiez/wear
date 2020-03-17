import ImageminPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';

module.exports = {
	configureWebpack: {
				plugins: [
					new ImageminPlugin({
  						// pngquant: ({quality: [0.5, 0.5]}),
  						plugins: [imageminMozjpeg({quality: 95})]
					})
          		]
	}
}