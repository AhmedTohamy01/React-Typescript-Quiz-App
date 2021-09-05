import ProgressBar from '../Components/ProgressBar/ProgressBar'
import AnswerCompound from './AnswerCompound'
import QuestionCompound from './QuestionCompound'
import ScoreBarCompound from './ScoreBarCompound'

export default function QuizCompound() {

  return (
    <>
      <ProgressBar />
      <QuestionCompound />
      <AnswerCompound />
      <ScoreBarCompound />
    </>
  )
}
