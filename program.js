var module = require('./modular.js');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

var callback = function (err, files) {
    if (err) return err;
    files.forEach(function (file) {
        console.log(file);
    });
};

module(directory, extension, callback);
