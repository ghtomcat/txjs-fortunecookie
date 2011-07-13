/* This kind implements the fetchNewFortune API using a 
 * local store of fortunes */
enyo.kind({
	name: "LocalFortunes",
	kind: enyo.Component,
	_lastPick: -1,
	_fortunes: [
		"\"... the educated person is not the person who can answer the questions, but\n"+
		"the person who can question the answers.\"\n"+
		"\t-- Theodore Schick Jr., in The_Skeptical_Inquirer, March/April, 1997",
		"A little fire, Scarecrow?",
		"Acting is an art which consists of keeping the audience from coughing.",
		"Anchovies?  You've got the wrong man! I spell my name DANGER!  (click)",
		"But I don't like Spam!",
		"Drawing on my fine command of language, I said nothing.",
		"Even the best of friends cannot attend each other's funeral.",
		"Progress is nothing but the victory of laughter over dogma.",
		"Research is what I'm doing when I don't know what I'm doing.\n\t\t&mdash; Wernher von Braun"
	],
	fetchNewFortune: function(callback) {
		var pick;
		do {
			pick = Math.floor(Math.random() * 
				this._fortunes.length);
		} while (pick === this._lastPick);
		this._lastPick = pick;
		callback(this._fortunes[pick]);
	}
});
