<?php

$iev = false;
$isie = false;
$dnt = false;
$ua = window.navigator.userAgent;
if ( !isset($respectIE) ) {
	$respectIE = false;
}

// >= 11 (Majority)
if ( strrpos($ua, 'Trident/') !== false ) {
	$rv = strrpos($ua, 'rv:');
	$iev = intval(substr($ua, ($rv + 3), strrpos($ua, '.', $rv)));
} else {

	// 5 - 10
	$msie = strrpos($ua, 'MSIE ');
	if ( $msie !== false ) {
		$iev = intval(substr($ua, ($msie + 5), strrpos($ua, '.', $msie)));
	}

	// No detection of 0 - 4
	// Rarely used.

}

// If is IE, mark it as so.
if ( $iev ) {
	$isie = true;
}

if (
	// If DNT is on
	isset($_SERVER['HTTP_DNT']) &&
	$_SERVER['HTTP_DNT'] &&
	(
		// AND you are not using IE 10 or later
		$iev < 10 ||
		// OR we were asked to respect it
		$respectIE
	)
) {
	$dnt = true;
}

$trackme = !$dnt;

var_dump($isie);
var_dump($iev);
var_dump($dnt);
var_dump($trackme);