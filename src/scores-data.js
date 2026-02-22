window.addEventListener('DOMContentLoaded', (event) => {
  const leaderBoard = document.querySelector('#leader-board');
  const addScoreForm = document.querySelector('#add-score-form');
  const addScoreButton = document.querySelector('#add-score-button');
  let playerName;

  let users = [];
  let counter = 0;
  let totalChildren;
  const leaderBoardLimit = 100;
  const scoreLimit = 3800;
  const MAX_SCORE = 4000;
  const name = 'Kadampa';

  const basApiUrl = 'https://node-api-serverless.vercel.app';
  const getScoresUrl = `${basApiUrl}/api/solitaire/view?page=1&orderBy=score&sortBy=desc&limit=150`;
  const addScoreUrl = `${basApiUrl}/api/solitaire/add`;

  const $ = (elem) => document.querySelector(elem);

  const create = (tagName, props = {}) => {
    const el = document.createElement(tagName);
    return Object.assign(el, props);
  };

  const spinner = document.getElementById('spinner');
  const showSpinner = () => {
    if (spinner) spinner.style.display = 'block';
  };
  const hideSpinner = () => {
    if (spinner) spinner.style.display = 'none';
  };

  const getScores = async () => {
    showSpinner();
    try {
      const response = await fetch(getScoresUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch scores');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching scores:', error.message);
    } finally {
      hideSpinner();
    }
  };

  (async () => {
    const scores = await getScores();
    console.log({ scores });
    renderAllScores(scores.data);
  })();

  addScoreButton.addEventListener('click', (event) => {
    event.preventDefault();
    const playerNameError = document.querySelector('.error-message');
    playerName = document.querySelector('#player-name');
    validate(game.s)
      .then((validationResolve, validationReject) => {
        return pushIt(game.s)
          .then((pushResolve) => {
            addScoreForm.style.display = 'none';
            game.s.resetSubmissionForm();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage =
          error === 'empty'
            ? 'Your name is required'
            : 'Your name is not valid';
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
      const validScore =
        String(score.currentScore).match(allowedNumbers) || false;
      const playerNameValue = playerName.value.trim();
      const matched = playerNameValue.match(allowedLetters);
      const validPlayerName = matched ? matched.shift() : false;
      if (!playerNameValue.length || !score.currentScore) {
        playerName.value = '';
        playerName.focus();
        reject('empty');
      } else if (
        !validScore ||
        !validPlayerName ||
        playerNameValue.length > 20
      ) {
        reject('invalid');
      } else {
        resolve('success');
      }
    });
  }

  function pushIt(score) {
    showSpinner();
    return new Promise((resolve, reject) => {
      counter = Math.max(...users.map((user) => user.id), 0) + 1;
      const formData = {
        secret: `${name}${window.num}!`,
        id: counter,
        user_name: escape(playerName.value),
        score: Number(escape(score.currentScore))
      };
      return fetch(addScoreUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((result) => {
          getScores();
          resolve('Score added successfully');
        })
        .catch((err) => {
          reject('Error: score not added');
        })
        .finally(() => {
          hideSpinner();
        });
    });
  }

  const renderAllScores = (data) => {
    $('#leader-board').innerText = '';
    let counter = 0;
    data.forEach((item) => {
      const userName = item.user_name;
      const score = item.score;
      if (userName && Number(score) < MAX_SCORE && counter < leaderBoardLimit) {
        const num = create('span', {
          textContent: `${counter + 1}. `,
          style: 'color: #aaa; font-size: 1rem'
        });
        counter++;
        const scoreContent = `${userName}: ${score}`;
        const scoreElement = create('span', { textContent: scoreContent });
        const pTag = document.createElement('p');
        pTag.appendChild(num);
        pTag.appendChild(scoreElement);
        $('#leader-board').appendChild(pTag);
      }
    });
  };

  (async () => {
    const scores = await getScores();
    // animateClock($('.clock-display'));
    renderAllScores(scores.data);
  })();
});
