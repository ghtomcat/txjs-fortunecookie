/* This kind implements local parsing of the fortunes.txt file */
enyo.kind({
	name: "FortuneJar",
	kind: enyo.Component,
	_lastPick: -1,
	_fortunes: [],
	_deferredCallbacks: [],
	components: [
		{ kind: enyo.WebService, name: "loader", 
		  url: "fortunes.txt", handleAs: "text", 
		  onSuccess: "parseFortunes" } ],

	create: function () {
		this.inherited(arguments);
		this.$.loader.call({});
	},

	parseFortunes: function(inSender, inResponse, inRequest) {
		if (!inResponse) {
			return;
		}
		
		this._fortunes = inResponse.split("\n%\n");
		this._fortunes = this._fortunes.map(
			this.formatFortune, this);
		
		// handle any callbacks queued while we were waiting
		this._deferredCallbacks.forEach(
			function(callback) {
				this.sendNewFortune(callback); }, this);
		this._deferredCallbacks = [];
	},

	formatFortune: function(fortune) {
		// turn -- into mdash characters and 
		// turn LF/TAB into HTML break plus nonbreaking spaces
		return fortune.replace(/\-\- /g, "&mdash; ").
		  replace(/\n\t/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp; ");
	},
	
	fetchNewFortune: function(callback) {
		if (this._fortunes.length === 0) {
			this._deferredCallbacks.push(callback);
			return;
		}
		
		var pick;
		do {
			pick = Math.floor(Math.random() * 
				this._fortunes.length);
		} while (pick === this._lastPick);
		this._lastPick = pick;
		callback(this._fortunes[pick]);
	}
}); 
