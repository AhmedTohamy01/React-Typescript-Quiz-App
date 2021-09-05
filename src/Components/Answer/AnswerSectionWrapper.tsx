import { ReactNode } from 'react'
import './Answer.css'

interface PropsType {
  children: ReactNode
}

export default function AnswerSectionWrapper({ children }: PropsType) {
  return <div className='answer-section-wrapper'>{children}</div>
}
