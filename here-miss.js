var iev = false;
var isie = false;
var dnt = false;
var ua = window.navigator.userAgent;
if ( typeof respect_ie == 'undefined' ) {
	respect_ie = false;
}

// >= 11 (Majority)
if ( ua.indexOf('Trident/') > -1 ) {
	var rv = ua.indexOf('rv:');
	iev = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
} else {

	// 5 - 10
	var msie = ua.indexOf('MSIE ');
	if ( msie > -1 ) {
		iev = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	// No detection of 0 - 4
	// Rarely used.

}

// If is IE, mark it as so.
if ( iev ) {
	var isie = true;
}

if (
	// If DNT is on
	(
		navigator.doNotTrack ||
		navigator.msDoNotTrack
	) &&
	(
		// AND you are not using IE 10 or later
		iev < 10 ||
		// OR we were asked to respect it
		respect_ie
	)
) {
	dnt = true;
}

var trackme = !dnt;