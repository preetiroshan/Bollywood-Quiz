const readLineSync = require('readline-sync');
const chalk = require('chalk');

welcomeMessage = chalk.underline.yellowBright("Welcome to the Bollywood Quiz!");
console.log(welcomeMessage);

const rules = "Rules: You're score is incremented by 1 if you answer a question correctly.";
console.log(rules);


const highScores = {
  Megha: 5,
  Priyam: 4
};

function objectKeyValues(options) {
  let myString = "";
  for (const option in options) {
    myString += chalk.blue(option +":" + options[option] + "\n");
  }
  return myString;
}

const highScoreInfo = chalk.blue("The scores till now are: \n" + objectKeyValues(highScores)) + "\n Let's begin! \n";
console.log(highScoreInfo);

let score = 0;
const questions = [
  {
    question: "Who played the role of Shyaam in Hera Pheri?",
    options: {
        a: "Sunil Grover",
        b: "Sunil Shetty",
        c: "Rajpal Yadav",
        d: "John Abrham",
    },
    answer: "b"
  },
  {
    question: "What was the name of the female lead chracter in " + chalk.italic("Kal Ho Na Ho") +"?",
    options: 
      {
        a: "Naina",
        b: "Pooja",
        c: "Simran",
        d: "Shreya",
      }
    ,
    answer: "a"
  },
  {
    question: "In" + chalk.italic("'Andaz Apna Apna' ") +  "who played the role of Raveena?",
    options: 
      {
        a: "Karishma Kapoor",
        b: "Madhuri Dixit",
        c: "Divya Bharti",
        d: "Raveena Tandon",
      }
    ,
    answer: "a"
  },
  {
    question: "In which of these movies did Amitabh and Jaya play the role of singers?",
    options: 
      {
        a: "Sholay",
        b: "Chup Chup Ke",
        c: "Abhimaan",
        d: "Silsila",
      }
    ,
    answer: "c"
  },
  {
    question: "Which movie among the following was the first movie produced by Aamir Khan?",
    options: 
      {
        a: "Rang De Basanti",
        b: "Lagaan",
        c: "3 Idiots",
        d: "Peepli Live",
      }
    ,
    answer: "b"
  }
];

function scoreAlert(type) {
  const myAlert = "Your " + type + " score is " + score;
  return myAlert;
}
function play(myQuestion) {
  const myAnswer = myQuestion.answer;

  const question = chalk.bold.yellow(myQuestion.question) + '\n' + objectKeyValues(myQuestion.options);

  let userAnswer = readLineSync.question(question);

  if (userAnswer === myAnswer) {
    score += 1;
    const message = chalk.green("Yes! You're right!")
    console.log(message);
  }
  else {
    const message = chalk.red("No:( You're wrong!")
    console.log(message);
  }
  console.log(scoreAlert("current"));
}

for (let i in questions) {
  play(questions[i]);
}

const result = chalk.rgb(150, 120, 39);
console.log(result.bold("\n" + scoreAlert("final")));

console.log("Send a screenshot if you beat the high score! \n");
