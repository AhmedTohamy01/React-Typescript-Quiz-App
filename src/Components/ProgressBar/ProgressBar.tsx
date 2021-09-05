import { useContext } from 'react'
import './ProgressBar.css'
import QuestionsData from '../../Data/questions.json'
import { MainContext } from '../../Context/MainContext'

export default function ProgressBar() {
  const { currentQuestion } = useContext(MainContext)
  const totalQuestions = QuestionsData.length
  const widthPercentage = (currentQuestion / totalQuestions) * 100

  return (
    <div
      className='progress-bar'
      style={{ width: `${widthPercentage}%` }}
    ></div>
  )
}
