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

  return (
    <>    
     
      <div className={props.element ? 'timer timer-element--margin-and-padding-smaller' : 'timer timer--margin-and-padding-bigger'}>
        <Typography variant={props.element ? 'h6' : 'h1'}>
          {formatTime(time)}
        </Typography>
      </div>

      <div className={props.element ? 'buttons-div buttons-div--content-gap' : 'buttons-div buttons-div--content-justify-content'}>
        {button}
        <Button onClick={reset} variant="outlined" color="error">reset</Button>
      </div>

    </>
  )
}

export default Stopwatch;