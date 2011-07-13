var libraries = MojoLoader.require(
	{ name: "foundations", version: "1.0" });
var fs = IMPORTS.require("fs");

var GetFortuneAssistant = function(){
};
  
GetFortuneAssistant.prototype = {
	_fortunes: [],
	
	run: function(f) {  
		if (this._fortunes.length === 0) {
			var fortuneData = 
				fs.readFileSync("fortunes.txt", "utf8");
			if (fortuneData) {
				this.parseFortunes(fortuneData);
				f.result = {
					"fortune": this.fetchNewFortune(), 
					"returnValue": true };
			}
			else {
				f.result = { "returnValue": false };
			}
		}
		else {
			f.result = {
				"fortune": this.fetchNewFortune(), 
				"returnValue": true };
		}
	},
	
	// turn long string of fortunes into this._fortunes array
	parseFortunes: function (fortuneData) {
		this._fortunes = fortuneData.split("\n%\n");
	},
	
	// return HTML formatted version of raw fortune text string
	formatFortune: function(fortune) {
		// turn -- into mdash characters and 
		// turn LF/TAB into HTML break plus nonbreaking spaces
		return fortune.replace(/\-\- /g, "&mdash; ").
			replace(/\n\t/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp; ");
	},
	
	// pick a random fortune from the array of fortunes
	fetchNewFortune: function() {  
		var pick = Math.floor(Math.random() * 
			this._fortunes.length);
		return this.formatFortune(this._fortunes[pick]);
	}
};