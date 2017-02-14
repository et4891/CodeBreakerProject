let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!validateInput(input.value)){
        return;
    }
    attempt.value++;
}

//implement new functions here

/*
* setHiddenFields()
* Generate random numbers from 0 - 9999
* If the number generated is less than 1 digit, will automatically add 0s in front to make it 4 digits
* */
function setHiddenFields() {
    answer.value = Math.floor((Math.random() * 10000)).toString();
    while(answer.value.length < 4){
        answer.value = '0' + answer.value
    }
    return answer;
}


/*
* setMessage()
* @param message            - insert the message into the message div
* */
function setMessage(message) {
    return document.getElementById('message').innerHTML = message;
}


/*
* validateInput()
* @param input              - input of the guesses
* validate if input is exactly 4 characters else return a message with false
* */
function validateInput(input) {
    if(input.length !== 4){
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
    // setMessage('');
    return true;
}