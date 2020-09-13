# Notes

### Todo
- Fix Help section transition
- Scoring: add 250 points if you end up with 1 left and another 250 points if it's left in the middle position, id:25
- Write readme
- Help section
- Protect against XSS

 click and drag a marble arbleping over another single marble to a empty hole (white box). You can move the marbles in either horizontal or vertical direction. The jumped over marble will be removed from the board, thus making a new hole. Remove as many marbles as possible.

### Done
- Change to OOP
- Leader Board

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

### CSS
- https://cssanimation.rocks/spheres/
- https://cssnewbie.com/making-a-sphere-in-css/#.X1e6iFMo8zY
- https://developpaper.com/css-draws-various-shapes/