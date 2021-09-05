import { useContext } from 'react'
import './Question.css'
import QuestionsData from '../../Data/questions.json'
import { MainContext } from '../../Context/MainContext'

export default function QuestionDifficulty() {
  const {currentQuestion} = useContext(MainContext)

  function getNumberOfStars() {
    if (QuestionsData[currentQuestion - 1].difficulty === 'hard') {
      return '★★★'
    } else if (QuestionsData[currentQuestion - 1].difficulty === 'medium') {
      return '★★✰'
    } else if (QuestionsData[currentQuestion - 1].difficulty === 'easy') {
      return '★✰✰'
    }
  }

  return (
    <p className='question-difficulty' >
      {getNumberOfStars()}
    </p>
  )
}
