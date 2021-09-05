import './Answer.css'

interface PropsType {
  children: string
  onClick?: () => void
}

export default function NextQuestionButton({ children, ...restProps }: PropsType) {
  return (
    <button className='next-question-button' {...restProps}>
      {children}
    </button>
  )
}
