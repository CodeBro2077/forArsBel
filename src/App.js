import React, { useState } from "react";
import './css/style.css'

import Result from "./components/Result";
import Game from "./components/Game";


const App = () => {
  const [questions, setQuestions] = useState([
    {
      title: 'React - это...',
      variants: ['Фреймворк', 'Библиотека ', 'это жаба скрипт'],
      correct: 1
    },
    {
      title: 'Компоненты в реакте это',
      variants: ['Ответ номер 1', 'Ответ номер 2 ', 'это жаба скрипт'],
      correct: 2
    },
    {
      title: 'Функциональный лучше классового',
      variants: ['Да', 'Нет ', 'это жаба скрипт'],
      correct: 0
    },
  ])

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const handlerClick = (id) => {
    setStep(step + 1)


    if (id === question.correct) {
      setCorrect(correct + 1)
    }

  }

  return (
    <div className="wrapper">

      {step !== questions.length ?

        (<Game
          step={step}
          questions={questions}
          question={question}
          handlerClick={handlerClick} />)

        :

        (<Result
          questions={questions}
          correct={correct} />)}

    </div>
  )
}

export default App;
