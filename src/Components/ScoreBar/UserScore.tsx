import './ScoreBar.css'

interface PropsType {
  children: string
}

export default function UserScore({ children }: PropsType) {
  return <p className='user-score'>{children}</p>
}
