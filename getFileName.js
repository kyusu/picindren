'use strict';
const url = require('url');
const path = require('path');
const M = require('ramda-fantasy').Maybe;
const Just = M.Just;
const Nothing = M.Nothing;

const getFileInfoFromPath = pathName => {
    const extName = path.extname(pathName);
    const fileName = path.basename(pathName, extName);
    if (extName && fileName) {
        return Just({
            ext: extName,
            file: fileName
        });
    } else {
        return Nothing();
    }
};

module.exports = line => {
    let result = null;
    try {
        result = url.parse(line).pathname;
    } catch (ex) {
        console.log(ex);
    }
    const pathName = result ? Just(result) : Nothing();
    return pathName.chain(getFileInfoFromPath);
};