# picindren (picture index renamer)
A simple Node.js shell script which takes a text file with file names and renames the given files.

If you have a file called **files.txt** containing the following links
    
    http://cdn.acme.corp/images/oooo/1213079645/1213079645.jpg
    http://cdn.acme.corp/images/oooo/1335702062/1335702062.jpg
    http://cdn.acme.corp/images/oooo/1615566250/1615566250.jpg
    http://cdn.acme.corp/images/oooo/1994615544/1994615544.jpg
    http://cdn.acme.corp/images/oooo/592280349/592280349.jpg
    http://cdn.acme.corp/images/oooo/212491440/212491440.jpg
    http://cdn.acme.corp/images/oooo/552716224/552716224.jpg
    http://cdn.acme.corp/images/oooo/1881347061/1881347061.jpg
    http://cdn.acme.corp/images/oooo/1153296479/1153296479.jpg
     
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

    $ cat files.txt | ./renamer.js
    
will result have the effect that each file is renamed according to it's index in the text file

    1213079645.jpg  -> 001.jpg
    1335702062.jpg  -> 002.jpg
    1615566250.jpg  -> 003.jpg
    1994615544.jpg  -> 004.jpg
    592280349.jpg   -> 005.jpg
    212491440.jpg   -> 006.jpg
    552716224.jpg   -> 007.jpg
    1881347061.jpg  -> 008.jpg    
    1153296479.jpg  -> 009.jpg