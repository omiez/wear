import ImageminPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';

module.exports = {
	configureWebpack: {
				plugins: [
					new ImageminPlugin({
  						pngquant: ({quality: 75}),
  						plugins: [imageminMozjpeg({quality: 75})]
					})
          		]
	}
}