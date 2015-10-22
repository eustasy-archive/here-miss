Here, Miss.
==========

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
