const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
];



/* Caricare la prima domanda e le prime risposte */

const paginaQuiz = document.getElementById('paginaQuiz');
const countdown = document.getElementById('countdown');
let question = document.querySelector('#question h1');
const answers = document.getElementById('answers');
const fourAnswers = document.getElementById('four-answers');
const twoAnswers = document.getElementById('two-answers');
const counter = document.getElementById('counter');
let answer1 = document.querySelector('#answer-1 button');
let answer2 = document.querySelector('#answer-2 button');
let answer3 = document.querySelector('#answer-3 button');
let answer4 = document.querySelector('#answer-4 button');
let answerLine2 = document.getElementById('answer-line2');

let answer = '';

let score = 0; //registraPunteggio
let questionNumber = 0;

paginaQuiz.addEventListener('load', caricaQuiz());

function caricaQuiz() {
  setTimer();
if (questionNumber < questions.length) {
  const domandaCorrente = questions[questionNumber].question;
  question.innerText = domandaCorrente;

  question.innerText = domandaCorrente;

  answer1.innerText = questions[questionNumber].correct_answer;
  answer2.innerText = questions[questionNumber].incorrect_answers[0];
  // if (answerLine2 )
  let btnContent3 = answer3.innerText = questions[questionNumber].incorrect_answers[1];
  let btnContent4 = answer4.innerText = questions[questionNumber].incorrect_answers[2];
  if (answer3.innerText === 'undefined' && answer4.innerText === 'undefined') {
  
  }

  fourAnswers.appendChild(answer1);
  fourAnswers.appendChild(answer2);
  fourAnswers.appendChild(answer3);
  fourAnswers.appendChild(answer4);
}

}

answer1.addEventListener('click', function () {
verificaRisposta(answer1.innerText);
});
answer2.addEventListener('click', function () {
verificaRisposta(answer2.innerText);
});
answer3.addEventListener('click', function () {
verificaRisposta(answer3.innerText);
});
answer4.addEventListener('click', function () {
verificaRisposta(answer4.innerText);
});

function verificaRisposta(answer) {
console.log(answer);
if (answer === answer1.innerText) {
  score ++
  console.log('risposta esatta');
}

cambioDomanda();
}

// Cambio domanda

function cambioDomanda() {
questionNumber++;
caricaQuiz();
}

function setTimer() {
  let timer = 10; 
  let interval = setInterval(function() {
      timer--; 
      document.getElementById('countdown').innerHTML = timer; 

    if (timer === 0 ) {
        clearInterval(interval);
        cambioDomanda();
}
},1000);  
}
startCountdown();{

document.getElementById('answer-1').onclick= function() {
    setTimer();
  };
}
