import './Answer.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function NextQuestionButtonWrapper({ children }: PropsType) {
  return <div className='next-question-button-wrapper'>{children}</div>
}
