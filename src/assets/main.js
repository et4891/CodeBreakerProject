let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
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