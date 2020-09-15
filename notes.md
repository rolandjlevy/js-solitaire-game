# Notes

### Todo
- Add sound effects for selecting, taking a marble, invalid move and winning: https://www.w3schools.com/graphics/game_sound.asp

![Solitaire demo](https://js-33-peg-solitaire-game.rjlevy.repl.co/images/solitaire-demo.gif)

 [click and drag a marble marble over another single marble to a empty hole (white box). You can move the marbles in either horizontal or vertical direction. The jumped over marble will be removed from the board, thus making a new hole. Remove as many marbles as possible.]

### Done
- Change to OOP
- Leader Board
- Fix weird glitch in Help section transition
- make help panel scrollable
- Write help section
- Add ordering index to Leader Board
- Write readme
- Protect against XSS with obscurator
- create a pre-obs repl for firebase code
- Scoring: in submission message, add 250 points if you end up with 1 left and another 250 points if it's left in the middle position, id:25

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