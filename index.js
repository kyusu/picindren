#!/usr/bin/env node
'use strict';
const ll = require('lazylines');
const fs = require('fs');
const getFileName = require('./getFileName.js');

let count = 1;

process.stdin.resume();
const inp = new ll.LineReadStream(process.stdin);
inp.on('line', (line) => {
    getFileName(ll.chomp(line)).chain(fileInfo => {
        const index = ('000' + count).substr(-3, 3);
        const oldName = `${fileInfo.file}${fileInfo.ext}`;
        const newName = `${index}${fileInfo.ext}`;
        try {
            fs.renameSync(oldName, newName);
        } catch (ex) {
            console.log(ex);
        }
    });
    count++;
});
