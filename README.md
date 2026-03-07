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

## Running locally with Vercel CLI

The upstream Vercel API (`node-api-serverless.vercel.app`) only accepts requests from `https://js-solitaire-game.vercel.app`.  
Running locally with `vercel dev` handles this transparently — the serverless functions in the `api/` folder proxy requests server-side, injecting the correct `Origin` and `Authorization` headers before forwarding to the upstream API.

This gives you a close-to-production environment, with static files served from the project root and `/api/*` routes handled by the same serverless functions used in production.

### 1. Install dependencies (once)

```bash
npm install
```

This includes the Vercel CLI as a dev dependency — no global install required.

### 2. Link this project to your Vercel project (once)

```bash
npx vercel link
```

Follow the prompts to connect to the `js-solitaire-game` project on your Vercel account.

### 3. Pull environment variables

```bash
npx vercel env pull
```

This writes `GAME_SECRET`, `API_KEY`, and `API_BASE_URL` to a `.env.local` file in the project root (already listed in `.gitignore`, so it will not be committed).

### 4. Start the dev server

```bash
npm run vercel-dev
```

### 5. Open in browser

```bash
"$BROWSER" http://localhost:8080
```
