import { useTimer } from 'use-timer';
import { formatTime } from "./utils/FormatTime";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const Stopwatch = (props) => {

  const { time, start, pause, reset, status } = useTimer();
  let statusTimer = 'start'
  let button
   
  const checkStatusTimer = () => {
    if (status === 'RUNNING') {
      return statusTimer = 'pause'
    } else if (status === 'PAUSED'){
      return statusTimer = 'resume'
    } else {
      return statusTimer = 'start'
    }
  }

  if (status === 'RUNNING') {
    button = <Button onClick={pause} variant="outlined" color="success">{checkStatusTimer()}</Button>
  } else {
    button = <Button onClick={start} variant="outlined">{checkStatusTimer()}</Button>
  }

  console.log(props.element)

  return (
    <>    
     
      <div className={props.element ? 'Stopwatch--timer--Element' : 'Stopwatch--timer'}>
        <Typography variant={props.element ? 'h6' : 'h1'}>
          {formatTime(time)}
        </Typography>
      </div>

      <div className={props.element ? 'buttons--Element' : 'buttons'}>
        {button}
        <Button onClick={reset} variant="outlined" color="error">reset</Button>
      </div>

    </>
  )
}

export default Stopwatch;