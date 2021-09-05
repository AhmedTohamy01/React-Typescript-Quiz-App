import './ScoreBar.css'

interface PropsType {
  children: string
}

export default function MaxScore({ children }: PropsType) {
  return <p className='max-score'>{children}</p>
}
