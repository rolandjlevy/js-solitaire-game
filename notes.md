# Notes

### Todo
- Scoring: in submission message, add 250 points if you end up with 1 left and another 250 points if it's left in the middle position, id:25
- Write readme
- Write help section
- Protect against XSS with obscurator

**Aim of the game**
This is a game of speed, skill and logic. The aim of the game is to remove as many marbles as possible in 100 seconds. It's a race against time!

**Removing the marbles**
Select any marble so it turns blue and move it over another marble so it lands in an empty space, either horizontally or vertically.

The marble you moved over will be removed from the board, thus making a new hole. 

To cancel your selection click on the blue marble again so it turns gold.

**Scoring**
Each time you remove a marble the score increases by the amount of seconds remaining multiplied by the amount of marbles taken. For example 5 pieces taken with 90 seconds remaining gives a total score of 5 x 90 = 450. The more marbles you take, the higher the score. 

You can end the game at and time to submit your score to the Leader Board.

**Bonus points**:
If you complete with just one peice remaining which is 'solitaire' you win a bonus 250 points. If you manage to get the last price in the very centre of the board the bonus is 1000 points!


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