import './Answer.css'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

export default function FinishMessageOverlay({ children }: PropsType) {
  return <div className='finish-message-overlay'>{children}</div>
}
