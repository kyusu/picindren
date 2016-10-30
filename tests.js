'use strict';

const tape = require('tape');
const M = require('ramda-fantasy').Maybe;
const R = require('ramda');
const getFileName = require('./getFileName.js');

const checkFileInfoProperties = R.curry((t, fileInfo, name, extension, type) => {
    t.ok(fileInfo.file == name && fileInfo.ext === extension, `Given a valid ${type}, getFileName should return the file info`);
});

tape('handling invalid input', t => {
    t.ok(M.isNothing(getFileName('')), 'Given an empty string, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName(null)), 'Given a null, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName(undefined)), 'Given a undefined, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName(123)), 'Given a number, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName({})), 'Given a object, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName([])), 'Given a array, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName('////')), 'Given an invalid path, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName('https://github.com/ramda/ramda-fantasy/')), 'Given an URL without a file part, getFileName returns Nothing');
    t.ok(M.isNothing(getFileName('/Users/julio/Pictures/')), 'Given an file system path without a file part, getFileName returns Nothing');
    t.end();
});

tape('handling valid input', t => {
    const check = checkFileInfoProperties(t);
    const fileInfo1 = getFileName('http://cdn.acme-corp.com/u/666/1213079645/5300431/5300431.jpg').getOrElse({});
    check(fileInfo1, '5300431', '.jpg', 'URL');
    const fileInfo2 = getFileName('/Users/julio/Pictures/Jones0041c.JPG').getOrElse({});
    check(fileInfo2, 'Jones0041c', '.JPG', 'file system path');
    const fileInfo3 = getFileName('Jones0041c.JPG').getOrElse({});
    check(fileInfo3, 'Jones0041c', '.JPG', 'file name');
    t.end();
});
