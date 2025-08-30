
      // Initialize score
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      // Initial score display
      updateScoreDisplay();

      function results(playerMove) {
        let result;
        const computerMove = computerMoves();

        if (playerMove === computerMove) {
          result = 'tie';
        } else if (
          (playerMove === 'rock' && computerMove === 'scissors') ||
          (playerMove === 'paper' && computerMove === 'rock') ||
          (playerMove === 'scissors' && computerMove === 'paper')
        ) {
          result = 'win';
        } else {
          result = 'lose';
        }

        // Update score
        if (result === 'win') {
          score.wins++;
        } else if (result === 'lose') {
          score.losses++;
        } else {
          score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        // Display result and score
        document.getElementById('result-display').innerText = `You choose ${playerMove}, computer chose ${computerMove}. You ${result.toUpperCase()}!`;
        updateScoreDisplay();
      }

      function computerMoves() {
        const randomNUM = Math.random();
        if (randomNUM < 1 / 3) return 'rock';
        else if (randomNUM < 2 / 3) return 'paper';
        else return 'scissors';
      }

      function updateScoreDisplay() {
        document.getElementById('score-display').innerText =
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreDisplay();
        document.getElementById('result-display').innerText = '';
        alert('Score has been reset!');
      }
   