import QuestionCategory from '../Components/Question/QuestionCategory'
import QuestionDifficulty from '../Components/Question/QuestionDifficulty'
import QuestionNumber from '../Components/Question/QuestionNumber'
import QuestionSectionWrapper from '../Components/Question/QuestionSectionWrapper'
import QuestionText from '../Components/Question/QuestionText'

export default function QuestionCompound() {
  return (
    <>
      <QuestionSectionWrapper>
        <QuestionNumber />
        <QuestionCategory />
        <QuestionDifficulty />
        <QuestionText />
      </QuestionSectionWrapper>
    </>
  )
}
