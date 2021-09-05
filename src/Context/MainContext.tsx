import { createContext, useState, ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

interface ContextInterface {
  currentQuestion: number
  setCurrentQuestion?: (arg0: number) => void
  showAnswerResult: string
  setShowAnswerResult?: (arg0: string) => void
  correctAnswersNumber: number
  setCorrectAnswersNumber?: (arg0: number) => void
  wrongAnswersNumber: number
  setWrongAnswersNumber?: (arg0: number) => void
}

export const MainContext = createContext<ContextInterface>({
  currentQuestion: 1,
  showAnswerResult: '',
  correctAnswersNumber: 0,
  wrongAnswersNumber: 0,
})

export const MainContextProvider = ({ children }: PropsType) => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showAnswerResult, setShowAnswerResult] = useState('')
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0)
  const [wrongAnswersNumber, setWrongAnswersNumber] = useState(0)

  return (
    <MainContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        showAnswerResult,
        setShowAnswerResult,
        correctAnswersNumber,
        setCorrectAnswersNumber,
        wrongAnswersNumber,
        setWrongAnswersNumber,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
