/*
 * TxJS 2011 Sample
 *
 * Fortune Cookie
 *
 * Fortune Cookie image taken from http://commons.wikimedia.org/wiki/File:Fortune_cookie.jpg, 
 * used under CC 3.0 Attribution Share Alike license.
 *
 * Fortune Cookie database from https://github.com/bmc/fortunes/, 
 * fetched from https://raw.github.com/bmc/fortunes/master/fortunes
 */

 enyo.kind({
	name: "FortuneCookieApp",
	kind: "VFlexBox",
	components: [
		// { kind: "LocalFortunes", name: "fortunes" },
		// { kind: "FortuneJar", name: "fortunes" },
		{ kind: "FortuneService", name: "fortunes" },
		// { kind: "Header", content: "TxJS 2011 - Fortune Cookie" },
		{ kind: "HFlexBox", flex: 1, components: [
			{ kind: "Image", src: "Fortune_cookie_320x320.png", 
			  style: "padding: 10px" },
			{ kind: "HtmlContent", name: "output", flex: 1, 
			  className: "fortuneCookie", 
			  content: "Help, I'm being held prisoner in a " +
			           "fortune cookie factory." } ] },
		{ kind: "Button", caption: "New Fortune", 
		  onclick: "showNewFortune" }
	],
	showNewFortune: function() {
		this.$.fortunes.fetchNewFortune(enyo.bind(this, 
			function(fortune) { 
			  this.$.output.setContent(fortune); }));
	}
 });
 