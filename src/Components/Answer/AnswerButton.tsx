import './Answer.css'

interface PropsType {
  children: string
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export default function AnswerButton({ children, ...restProps }: PropsType) {
  return <button {...restProps}>{children}</button>
}
