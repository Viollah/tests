function guessGame (){
    let randomNumber = Math.ceil((Math.random() * 100))

    function newGame(){

    }

    function guessBtnClicked() {
        const guessedNo = Number;
        const message = "";
    
        if (guessedNo > 100 || guessedNo < 1) {
            message.innerHTML = 'Please enter a valid number';
    
    
        }else if (guessedNo < randomNumber) {
            message.innerHTML = "Too low! Try again!";
           
    
        } else if (guessedNo > randomNumber) {
            message.innerHTML = "Too High! Try again!";
            
    
        } else {
            message.innerHTML =  `The secret number is ${guessedNo}!`;
      
        }
    }

    function reset(){

    }
    return {
        newGame,
        guessBtnClicked,
        reset
    }
}