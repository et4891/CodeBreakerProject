let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
    // let answer = Math.floor((Math.random() * 10000)).toString();
    // let maxAnswerLength = 4;
    // let lengthOfAnswer = answer.length;
    //
    // if((lengthOfAnswer < maxAnswerLength)){
    //     let prefixZeros = maxAnswerLength - lengthOfAnswer;
    // }
    // return answer;
    let answer = Math.floor((Math.random() * 10000)).toString();
    while(answer.length < 4){
        answer = '0' + answer
    }
    return answer;
}

for (let i = 0; i < 11; i++){
    console.log(setHiddenFields());
}