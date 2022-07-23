//14.4 Part 2 Coding Instructions stap 1 t/m 4

let originalStory = "In The Lottery by Shirley Jackson, tradition and community ties lead to deadly consequences when a woman is chosen in the eponymous lottery to be stoned to death.";
//let originalStory = "In The Lottery by Shirley Jackson, tradition and community ties lead to deadly consequences when a woman is chosen in the eponymous lottery to be stoned to death.";

let userInputs = [];

//14.4 Part 2: Coding Instructions stap 5

let numberOfQuestions = 3;

let q1 = "What is your favourite store?";
let q2 = "What is your first name?";
let q3 = "Which pet do you have?";

let questionArray = [q1,q2,q3];
console.log(questionArray);


let questionCounter = 0;

for(let i = numberOfQuestions; i >= 1; i--){
    console.log(i);
    userInputs.push(prompt(questionArray[questionCounter] + `(${numberOfQuestions} questions left)`));
   
    questionCounter++;
    numberOfQuestions--;
    console.log(userInputs)
    
}

alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

let userStory = `In ${userInputs[0]} by ${userInputs[1]}, tradition and community ties lead to deadly consequences when a ${userInputs[2]} is chosen in the eponymous lottery to be stoned to death.`;


//Show the story which entered input from the user 
console.log(userStory);

//Write the story to the DOM

document.write(userStory);