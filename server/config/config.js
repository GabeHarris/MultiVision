var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development:{
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://gharris:multivision@dbh35.mongolab.com:27357/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};