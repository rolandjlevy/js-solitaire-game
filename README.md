# ⚡ Marble Solitaire ⚡

A fast-paced, JavaScript logic game where players try to clear the board within a 100-second countdown. Featuring a responsive design and a MongoDB-powered leaderboard. A game of speed, logic and skill: start with 33 marbles and try to finish with just one marble left in the middle of the board to achieve 'Solitaire'.

### Links 🔗

- [Play the game](https://js-solitaire-game.vercel.app/)
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

### Running this app locally in Github CodeSpaces

- Install dependencies and start the dev server

```bash
npm install
```

```bash
npm run dev
```

### Local dev server with API proxy

- The Vercel API only allows requests from https://js-solitaire-game.vercel.app
- When running locally (e.g., in a Codespace), the origin is different, so the browser blocks the request due to CORS
- The local proxy forwards API requests from the origin to the Vercel API server-side, bypassing the browser's CORS restriction
