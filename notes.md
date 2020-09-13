# Notes

### Todo
- Scoring: in submission message, add 250 points if you end up with 1 left and another 250 points if it's left in the middle position, id:25
- Write readme
- Write help section
- Protect against XSS with obscurator

This is a game of speed, skill and logic.

You have 100 seconds to remove as many marbles as possible.

Select any marble at a time by clicking once (blue), then click again to cancel (gold).

To remove a marble, select a marble and move it over another marble to a empty hole. Either horizontally or vertically.

The marble you jumped over will be removed from the board, thus making a new hole. 

This is a race against time. You have 100 seconds to complete the game

The aim of the game is to remove asany pieces as possible.

To remove a peice you need to jump over it and land on an empty space

Each time you remove a peice the score is multiplied by the amount of seconds remaining. For example 5 pieces taken with  90 seconds remaining gives a total score of 5 x 90 = 450. The more prices you take, the higher the score.

If you complete with just one peice remaining which is 'solitaire' you win a bonus 500 points. If you manage to get the last price in the very centre of the board the bonus is 1000 points!

You can end the game at and time to submit your score



 [click and drag a marble marble over another single marble to a empty hole (white box). You can move the marbles in either horizontal or vertical direction. The jumped over marble will be removed from the board, thus making a new hole. Remove as many marbles as possible.]

### Done
- Change to OOP
- Leader Board
- Fix weird glitch in Help section transition

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