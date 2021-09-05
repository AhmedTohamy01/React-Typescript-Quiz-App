import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { MainContext } from '../../Context/MainContext'

export default function QuestionCategory() {
  const {currentQuestion} = useContext(MainContext)

  return (
    <p className='question-category'>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].category)}
    </p>
  )
}
