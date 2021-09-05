import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { MainContext } from '../../Context/MainContext'

export default function QuestionText() {
  const { currentQuestion } = useContext(MainContext)

  return (
    <p className='question-text'>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].question)}
    </p>
  )
}
