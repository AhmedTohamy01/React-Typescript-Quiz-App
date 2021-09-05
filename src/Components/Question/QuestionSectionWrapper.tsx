import { ReactNode } from 'react'
import './Question.css'

interface PropsType {
  children: ReactNode
}

export default function QuestionSectionWrapper({ children }: PropsType) {
  return (
    <div className='question-section-wrapper'>
      {children}
    </div>
  )
}
