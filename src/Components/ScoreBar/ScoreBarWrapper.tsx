import './ScoreBar.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function ScoreBarWrapper({ children }: PropsType) {
  return <div className='score-bar-wrapper'>{children}</div>
}
