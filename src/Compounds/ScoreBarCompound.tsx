import { useContext } from 'react'
import QuestionsData from '../Data/questions.json'
import MaxScore from '../Components/ScoreBar/MaxScore'
import LowestScoreBar from '../Components/ScoreBar/LowestScoreBar'
import ScoreBar from '../Components/ScoreBar/ScoreBar'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import MaximumScoreBar from '../Components/ScoreBar/MaximumScoreBar'
import ScoreBarWrapper from '../Components/ScoreBar/ScoreBarWrapper'
import ScoreSectionWrapper from '../Components/ScoreBar/ScoreSectionWrapper'
import UserScore from '../Components/ScoreBar/UserScore'
import { MainContext } from '../Context/MainContext'

export default function ScoreBarCompound() {
  const { currentQuestion, correctAnswersNumber, wrongAnswersNumber } =
    useContext(MainContext)

  const totalQuestions = QuestionsData.length
  const totalAnsweredQuestions = currentQuestion - 1
  const score = (correctAnswersNumber / totalAnsweredQuestions) * 100
  const lowestScore = (correctAnswersNumber / totalQuestions) * 100
  const maximumScore =
    ((totalQuestions - wrongAnswersNumber) / totalQuestions) * 100

  return (
    <>
      <ScoreSectionWrapper>
        <ScoreBarData>
          <UserScore>
            {totalAnsweredQuestions === 0
              ? 'Score: 0%'
              : `Score: ${Math.round(score)}%`}
          </UserScore>
          <MaxScore>
            {totalAnsweredQuestions === 0
              ? 'Max Score: 100%'
              : `Max Score: ${Math.round(maximumScore)}%`}
          </MaxScore>
        </ScoreBarData>
        <ScoreBarWrapper>
          <LowestScoreBar style={{ width: `${Math.round(lowestScore)}%` }} />
          <ScoreBar style={{ width: `${Math.round(score)}%` }} />
          <MaximumScoreBar style={{ width: `${Math.round(maximumScore)}%` }} />
        </ScoreBarWrapper>
      </ScoreSectionWrapper>
    </>
  )
}
