import './Answer.css'

interface PropsType {
  children: string
}

export default function AnswerResult({ children }: PropsType) {
  return <p className='answer-result'>{children}</p>
}
