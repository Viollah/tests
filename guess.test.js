 describe('Guessing Game', ()=> {

      it(' This should generate a random number between 1 and 100', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked();
          assert.equal(gameTest.guessBtnClicked())
      });
      it('This should show your guess is too high', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked(100);
          assert.equal(gameTest.guessBtnClicked('Too High! Try again!'))
      });
      it('This should show your guess is too low', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked(0);
          assert.equal(gameTest.guessBtnClicked('Too Low! Try again!'))
      });
      it(' This should show , the secret number is ${number}', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked(100);
          assert.equal(gameTest.guessBtnClicked('Too High! Try again!'))
      });
      it('This should Higher, it has to be between 1 and 100', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked(500);
          assert.equal(gameTest.guessBtnClicked('Higher, it has to be between 1 and 100'))
      });
      it('This should Lower,it has to be between 1 and 100', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked(500);
          assert.equal(gameTest.guessBtnClicked('Lower, it has to be between 1 and 100'))
      });
      it('This should show a message when a new game has started', ()=> {
          let gameTest = guessGame();
          gameTest.newGame();
          assert.equal(gameTest.guessBtnClicked('New Game started'))
      });
      it('This should show the new game started should display for 3 seconds', ()=> {
          let gameTest = guessGame();
          gameTest.newGame();
          assert.equal(gameTest.guessBtnClicked('New Game started'))
      });
      it('This should generate a new random number 3 seconds after a successful guess', ()=> {
          let gameTest= guessGame();
          gameTest.guessBtnClicked();
          assert.equal(gameTest.guessBtnClicked())
      });
      it('This should generate a new random number when widget is refreshed', ()=> {
          let gameTest = guessGame();
          gameTest.guessBtnClicked();
          assert.equal(gameTest.guessBtnClicked())
      });

  });

