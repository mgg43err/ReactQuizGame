import './index.scss';
import React  from 'react';

const questions = [
  {
    title: ' What is React ?',
    variants: ['library', 'framework', 'app'],
    correct: 0,
  },
  {
    title: 'What is a component',
    variants: ['app', 'part of app or page', 'something i never heard about'],
    correct: 1,
  },
  {
    title: 'what is  JSX?',
    variants: [
      `It's a plain HTML`,
      'This is a function',
      ' This is a HTML but with ability to run JS code',
    ],
    correct: 2,
  },
];



function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"  alt="resultImage"/>
      <h2>you guessed {correct} answers from {questions.length}</h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  
  const percentage = Math.round(step/question.variants.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul >
        {question.variants.map((x, index) => (<li onClick={()=>onClickVariant(index, percentage)} key={x}>{x}</li>))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)

  const [correct, setCorrect] = React.useState(0)

  const question = questions[step];

  const onClickVariant = (index, percentage) => {
    console.log(step, index, percentage)    
    setStep(step + 1)
    
    if (index === question.correct) { 
      setCorrect(correct+1)
    }
  }

  return (
    <div className="App">
      {step !== questions.length ?
        (<Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />) :
        (<Result
          correct={correct}
        />)}
    </div>
  );
}

export default App;
