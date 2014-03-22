var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://jmilosh:multivision@ds029187.mongolab.com:29187/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80

	}
}