module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
		loader:[
		{test:/\.css$/,loader:'style!css'}
		]
	}
}