window.addEventListener('DOMContentLoaded', (event) => {

  const leaderBoard = document.querySelector('#leader-board');
  const addScoreForm = document.querySelector('#add-score-form');
  const addScoreButton = document.querySelector('#add-score-button');
  let playerName;

  let users = [];
  let counter = 0;
  let totalChildren;
  const leaderBoardLimit = 200;
  const scoreLimit = 3800;
  const name = 'Kadampa';

  const baseUrl = 'https://express-portfolio-api.rolandjlevy.repl.co';
  const getScoresUrl = `${baseUrl}/api/routes/solitaire?origin=${window.origin}`;
  const addScoreUrl = `${baseUrl}/api/routes/add-solitaire-score?origin=${window.origin}`;

  const getScores = async () => {
    users = [];
    leaderBoard.innerText = 'Loading...';
    const response = await fetch(getScoresUrl);
    const json = await response.json();
    json.forEach(score => {
      users.push(score);
    });
    renderAllScores(users);
  }

  getScores();

  function renderAllScores(score) {
    leaderBoard.innerText = '';
    const topUsers = users
      .sort((a, b) => b.score - a.score)
      .filter((item, index) => item.score < scoreLimit);
    topUsers.forEach((item, index) => {
      const p = document.createElement('p');
      const nameStr = unescape(item.user_name).replace(/</g, "&lt;").replace(/>/g, "gt;").trim();
      const score = Number(item.score).toLocaleString();
      const scoreStr = String(score).replace(/</g, "&lt;").replace(/>/g, "gt;");
      const validPattern = /^[a-zA-Z0-9@, ]*$/gm;
      const validInput = (nameStr.match(validPattern) || false) && (scoreStr.match(validPattern) || false);

      if (validInput && index < leaderBoardLimit) {
        const textContent = document.createTextNode(`${index + 1}. ${unescape(nameStr)}: ${unescape(scoreStr)}`);
        p.appendChild(textContent);
        leaderBoard.appendChild(p);
      }
    });
  }

  addScoreButton.addEventListener('click', (event) => {
    event.preventDefault();
    const playerNameError = document.querySelector('.error-message');
    playerName = document.querySelector('#player-name');
    validate(game.s).then((validationResolve, validationReject) => {
      return pushIt(game.s).then(pushResolve => {
        addScoreForm.style.display = 'none';
        game.s.resetSubmissionForm();
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
      const errorMessage = error === 'empty' ? 'Your name is required' : 'Your name is not valid';
      playerName.classList.add('invalid');
      playerNameError.classList.add('show');
      playerNameError.textContent = errorMessage;
      return;
    });
  });

  function validate(score) {
    return new Promise((resolve, reject) => {
      const allowedLetters = /^[a-zA-Z0-9@ ]*$/gm;
      const allowedNumbers = /^[0-9]*$/gm;
      const validScore = String(score.currentScore).match(allowedNumbers) || false;
      const playerNameValue = playerName.value.trim();
      const matched = playerNameValue.match(allowedLetters);
      const validPlayerName = matched ? matched.shift() : false;
      if (!playerNameValue.length || !score.currentScore) {
        playerName.value = '';
        playerName.focus();
        reject('empty');
      } else if (!validScore || !validPlayerName || playerNameValue.length > 20) {
        reject('invalid');
      } else {
        resolve('success');
      }
    });
  }


  function pushIt(score) {
    return new Promise((resolve, reject) => {
      counter = Math.max(...users.map(user => user.id), 0) + 1;
      const formData = {
        secret: `${name}${window.num}!`,
        id: counter,
        user_name: escape(playerName.value),
        score: Number(escape(score.currentScore)),
      }
      return fetch(addScoreUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then(result => {
        getScores();
        resolve('Score added successfully');
      }).catch(err => {
        reject('Error: score not added');
      });
    });
  }

});