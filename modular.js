var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        }
        else {
            files = files.filter(function (file) {
                if (path.extname(file) === '.' + extension) {
                    return true;
                }
            }); callback(null, files);
        }
    });
};
