import { ReactNode } from 'react'
import './Answer.css'

interface PropsType {
  children: ReactNode
}

export default function AnswerButtonsWrapper({ children }: PropsType) {
  return <div className='answer-buttons-wrapper'>{children}</div>
}
