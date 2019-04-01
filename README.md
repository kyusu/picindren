# picindren (picture index renamer)

[![Known Vulnerabilities](https://snyk.io/test/github/kyusu/picindren/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kyusu/picindren?targetFile=package.json)
[![dependencies Status](https://david-dm.org/kyusu/picindren/status.svg)](https://david-dm.org/kyusu/picindren)

A simple Node.js shell script which takes a text file with file names and renames the given files.
## Install

#### NPM
```bash
$ npm install -g picindren
```

## Usage
If you have a file called **files.txt** containing the following links
    
    http://cdn.acme.corp/images/oooo/234234234/1213079645.jpg
    http://cdn.acme.corp/images/oooo/5234234234/1335702062.jpg
    http://cdn.acme.corp/images/oooo/6463453453/1615566250.jpg
    http://cdn.acme.corp/images/oooo/73123123/1994615544.jpg
    http://cdn.acme.corp/images/oooo/734523433/592280349.jpg
    http://cdn.acme.corp/images/oooo/9992342343/212491440.jpg
    http://cdn.acme.corp/images/oooo/2234146234/552716224.jpg
    http://cdn.acme.corp/images/oooo/2347234234/1881347061.jpg
    http://cdn.acme.corp/images/oooo/0005245234/1153296479.jpg
     
and a directory containing these files like so

    total 0
    drwxr-xr-x  12 kyusu  staff  408 30 Okt 15:13 .
    drwxr-xr-x   5 kyusu  staff  170 30 Okt 15:11 ..
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1153296479.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1213079645.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1335702062.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1615566250.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1881347061.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1994615544.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 212491440.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 552716224.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 592280349.jpg
   
then running
```bash
    $ cat files.txt | picindren
```  
will have the effect that each file is renamed according to it's index in the text file

    total 0
    drwxr-xr-x  12 kyusu  staff  408 30 Okt 15:13 .
    drwxr-xr-x   5 kyusu  staff  170 30 Okt 15:11 ..
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1153296479.jpg -> 009.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1213079645.jpg -> 001.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1335702062.jpg -> 002.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1615566250.jpg -> 003.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1881347061.jpg -> 008.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 1994615544.jpg -> 004.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 212491440.jpg  -> 006.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 552716224.jpg  -> 007.jpg
    -rw-r--r--   1 kyusu  staff    0 30 Okt 15:12 592280349.jpg  -> 005.jpg
## License

  [MIT](LICENSE)
