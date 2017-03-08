Here, Miss.
==========

[![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=8706394)](https://www.bountysource.com/teams/eustasy/issues?tracker_ids=8706394)
[![Build Status](https://travis-ci.org/eustasy/here-miss.svg?branch=master)](https://travis-ci.org/eustasy/here-miss)

Do Not Track settings in a handy set of variables, disabled for IE 10+ users by default (configurable).

### To Use
#### Inputs
##### respectIE = bool(false)
A boolean value on whether to respect later IE versions that turn on DoNotTrack by default.  
Defaults to `false`
#### Outputs
##### iev = int(11)
The Internet Explorer version. An integer if Internet Explorer, `false` if not.
##### isie = bool(true)
A boolean value to check if this is Internet Explorer.
##### dnt = bool(false)
A boolean value that states whether the DoNotTrack header was set.
##### trackme = bool(true)
A boolean value that states whether the user allows tracking.

### Strings
#### Internet Explorer
##### Internet Explorer 11
`Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko`
##### Internet Explorer 10
`Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)`
##### Internet Explorer 7
`Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)`
