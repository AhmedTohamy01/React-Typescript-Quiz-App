import './ScoreBar.css'

interface PropsType {
	style: {
		width: string
	}
}

export default function LowestScoreBar({ ...restProps }: PropsType) {
  return <div className='lowest-score-bar' {...restProps}></div>
}
