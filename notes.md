# Notes

### Todo
- Prepare message for sat
- Convert to modules
- Sort out API exposure on Github. Move API key to env.js file. See https://dashboard.gitguardian.com/workspace/40412/scanning
- try to update part of a commit https://github.com/rolandjlevy/js-solitaire-game/commits/master?after=621d5d27f8b405868bd53f18e3d484ade5434ad1+34&branch=master

### Done
- Add an x and a = to the scoring so you get taken x timer = score
- Change to OOP
- Leader Board
- Fix glitch in Help section transition
- make help panel scrollable
- Write help section
- Add ordering index to Leader Board
- Write readme
- Protect against XSS with obfuscator
- create a pre-obs repl for firebase code
- Scoring: in submission message, add 250 points if you end up with 1 left and another 250 points if it's left in the middle position, id:25
- Add sound effects for selecting, taking a marble, invalid move and winning: https://www.w3schools.com/graphics/game_sound.asp
- Sound effects libraries:
+ [good] http://soundbible.com/ 
+ https://www.buildbox.com/13-places-to-find-free-game-sound-effects/
+ https://99sounds.org/free-sound-effects/
+ https://blog.felgo.com/game-resources/16-sites-featuring-free-game-sounds

### Other solitaire games
- https://veerasundar.com/33holepegsolitaire/
- https://youtu.be/XLmE12fHifc
- https://youtu.be/f1AuE4WweSw

### Fixes
- Fix for [300ms lag onclick event](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)
- [Clear all setintervals:](https://stackoverflow.com/questions/34167975/clear-all-setintervals)
```js
let id = window.setInterval(function() {}, 0);
while (id--) {
  window.clearInterval(id);
}
```

### Links
- Gif screen capture: https://giphy.com/apps/giphycapture

### CSS
- https://cssanimation.rocks/spheres/
- https://cssnewbie.com/making-a-sphere-in-css/#.X1e6iFMo8zY
- https://developpaper.com/css-draws-various-shapes/