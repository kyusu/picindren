'use strict';
const url = require('url');
const path = require('path');
const Result = require('crocks/Result');
const tryCatch = require('crocks/Result/tryCatch');
const composeK = require('crocks/helpers/composeK');

const getFileInfoFromPath = pathName => {
    const extName = path.extname(pathName);
    const fileName = path.basename(pathName, extName);
    if (extName && fileName) {
        return Result.Ok({
            ext: extName,
            file: fileName
        });
    } else {
        return Result.Err(new Error('Could not derive extension & file name from pathname'));
    }
};

const tryParsingUrl = tryCatch(line => url.parse(line).pathname);

const checkPathName = result => result ? Result.Ok(result) : Result.Err(new Error('pathname can not be null'));

module.exports = composeK(
    getFileInfoFromPath,
    checkPathName,
    tryParsingUrl
);
