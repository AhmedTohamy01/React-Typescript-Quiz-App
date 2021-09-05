import { ReactNode } from 'react'
import './ScoreBar.css'

interface PropsType {
  children: ReactNode
}

export default function ScoreBarData({ children }: PropsType) {
  return <div className='score-bar-data'>{children}</div>
}
