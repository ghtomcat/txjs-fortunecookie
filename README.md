This is the sample code for Ben Combee's presentation on Enyo and Node.js at the TXJS 2011 confernece.

You can see the slides for this talk at http://www.slideshare.net/unwiredben/javascript-on-hp-webos-enyo-and-nodejs

This is a simple Enyo application showing a fortune cookie application.  It has three implementations of the "get next fortune" code.  

- LocalFortunes.js: hard-coded messages in the JS file
- FortuneJar.js: reads the messages file in the Enyo app using a enyo.WebService request
- FortuneService.js: asks a fortune cookie service implemented in node.js for a fortune

The implementation that's used is selected by the commented-out code in app.js.

We supply a build.cmd for building the package on Windows.  This can be easily modified into a build.sh file for Mac OS X or Linux.

You'll need the HP webOS 3.0 SDK, a free download at http://developer.hpwebos.com/ to build this and test it.  This will run fine in the HP webOS 3.0 emulator or on a HP TouchPad device.