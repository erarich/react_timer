import { useTimer } from 'use-timer';
import { formatTime } from "./utils/FormatTime";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const Stopwatch = () => {

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

  return (
    <>    
      <div className='Stopwatch'>

        <div className='Stopwatch--timer'>
          <Typography variant="h4" component="h2">
            {formatTime(time)}
          </Typography>
        </div>

        <div className='buttons'>
          {button}
          <Button onClick={reset} variant="outlined" color="error">reset</Button>
        </div>

      </div>
    </>
  )
}

export default Stopwatch;