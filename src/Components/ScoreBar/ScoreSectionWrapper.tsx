import './ScoreBar.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ScoreSectionWrapper({ children }: PropsType) {
  return <div className='score-section-wrapper'>{children}</div>
}
