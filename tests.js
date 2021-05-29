'use strict';

const tape = require('tape');
const either = require('crocks/pointfree/either');
const curry = require('crocks/helpers/curry');
const identity = require('crocks/combinators/identity');
const getFileName = require('./getFileName.js');

const e = either(identity, identity);
const toBool = either(() => false, () => true);

const checkFileInfoProperties = curry((t, fileInfo, name, extension, type) => {
    t.ok(fileInfo.file === name && fileInfo.ext === extension, `Given a valid ${type}, getFileName should return the file info`);
});

tape('handling invalid input', t => {
    t.error(toBool(getFileName('')), 'Given an empty string, getFileName returns Result.Err');
    t.error(toBool(getFileName(null)), 'Given a null, getFileName returns Nothing');
    t.error(toBool(getFileName(undefined)), 'Given a undefined, getFileName returns Nothing');
    t.error(toBool(getFileName(123)), 'Given a number, getFileName returns Nothing');
    t.error(toBool(getFileName({})), 'Given a object, getFileName returns Nothing');
    t.error(toBool(getFileName([])), 'Given a array, getFileName returns Nothing');
    t.error(toBool(getFileName('////')), 'Given an invalid path, getFileName returns Nothing');
    t.error(toBool(getFileName('https://github.com/ramda/ramda-fantasy/')), 'Given an URL without a file part, getFileName returns Nothing');
    t.error(toBool(getFileName('/Users/julio/Pictures/')), 'Given an file system path without a file part, getFileName returns Nothing');
    t.end();
});

tape('handling valid input', t => {
    const check = checkFileInfoProperties(t);
    const fileInfo1 = e(getFileName('http://cdn.acme-corp.com/u/666/1213079645/5300431/5300431.jpg'));
    check(fileInfo1, '5300431', '.jpg', 'URL');
    const fileInfo2 = e(getFileName('/Users/julio/Pictures/Jones0041c.JPG'));
    check(fileInfo2, 'Jones0041c', '.JPG', 'file system path');
    const fileInfo3 = e(getFileName('Jones0041c.JPG'));
    check(fileInfo3, 'Jones0041c', '.JPG', 'file name');
    t.end();
});
