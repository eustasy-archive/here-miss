////	Here, Miss.
// An DoNotTrack detection script that ignores settings done automatically.
// Copyright 2016 eustasy UK Ltd - MIT Licensed
//
////	Inputs
//
// respectIE = bool(false)
// A boolean value on whether to respect later IE versions that turn on DoNotTrack by default.
// Defaults to `false`
//
////	Outputs
//
// iev = int(11)
// The Internet Explorer version. An integer if Internet Explorer, `false` if not.
//
// isie = bool(true)
// A boolean value to check if this is Internet Explorer.
//
// dnt = bool(false)
// A boolean value that states whether the DoNotTrack header was set.
//
// trackme = bool(true)
// A boolean value that states whether the user allows tracking.

/* eslint-disable no-unused-vars, no-undef */

var iev = false
var isie = false
var dnt = false
var ua = window.navigator.userAgent
if ( typeof respectIE === 'undefined' ) {
	respectIE = false
}

// 5 - 10
var msie = ua.indexOf('MSIE ')
if ( msie > -1 ) {
	iev = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)

// >= 11 (Majority)
} else if ( ua.indexOf('Trident/') > -1 ) {
	var rv = ua.indexOf('rv:')
	iev = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
}

// No detection of 0 - 4
// Rarely used.

// If is IE, mark it as so.
if ( iev ) {
	isie = true
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
		respectIE
	)
) {
	dnt = true
}

var trackme = !dnt
