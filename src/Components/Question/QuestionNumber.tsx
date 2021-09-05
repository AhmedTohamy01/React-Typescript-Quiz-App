import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { MainContext } from '../../Context/MainContext'

export default function QuestionNumber() {
  const {currentQuestion} = useContext(MainContext)
  const totalQuestions = QuestionsData.length

  return (
    <p className='question-number'>
      Question {currentQuestion} of {totalQuestions}
    </p>
  )
}
