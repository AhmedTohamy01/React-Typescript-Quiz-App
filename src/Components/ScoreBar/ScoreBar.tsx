import './ScoreBar.css'

interface PropsType {
  style: {
    width: string
  }
}

export default function ScoreBar({ ...restProps }: PropsType) {
  return <div className='score-bar' {...restProps}></div>
}
