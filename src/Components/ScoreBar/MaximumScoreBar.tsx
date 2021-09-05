import './ScoreBar.css'

interface PropsType {
  style: {
    width: string
  }
}

export default function MaximumScoreBar({ ...restProps }: PropsType) {
  return <div className='maximum-score-bar' {...restProps}></div>
}
