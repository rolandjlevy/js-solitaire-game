# ⚡ Solitaire ⚡

A game of speed, logic and skill: start with 33 marbles and try to finish with just one marble left in the middle of the board to achieve 'Solitaire'.

### Links 🔗

- [Play the game](https://js-solitaire-game.rjlevy.repl.co/)
- [View the source code](https://repl.it/@rjlevy/js-solitaire-game)
- [Explore the Github repo](https://github.com/rolandjlevy/js-solitaire-game)

### Demo 🏁

![Solitaire demo](https://github.com/rolandjlevy/js-solitaire-game/blob/master/images/solitaire-demo-large.gif?raw=true 'Solitaire demo')

### How to Play Solitaire 👉

- **Aim of the game**
  Take away as many marbles as possible in the 100 seconds countdown.
- **How to take away marbles**
  Select a marble so it turns blue then place it over an adjacent marble into an empty space. The marble you move over will be taken. To deselect a marble, click on it again so it turns from blue to gold. See the demo above ⬆
- **Scoring**
  Each marble removed updates the score by the total marbles taken multiplied by the total seconds remaining. Eg, 20 marbles taken in 40 seconds scores 800. Finish the game at any time to submit your score to the Leader Board.
- **Bonus points**
  If you finish with just one marble remaining, which is 'Solitaire', you get a bonus 500 points, and if your last marble finishes in the centre of the board the bonus is 1,000 points!

### Features 💡

- Built from scratch with Vanilla JavaScript and CSS; no front-end frameworks or libraries like React, Vue etc...
- Completely responsive and mobile friendly
- Includes Help section and Leader board
- Scores are saved on the back-end using MongoDB Atlas

### How to run this app in Github CodeSpaces

- Run http-server with nodemon

```bash
npm i -g http-server nodemon
```

```bash
nodemon --exec http-server
```
