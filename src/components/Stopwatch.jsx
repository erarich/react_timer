import { useTimer } from 'use-timer';
import { formatTime } from "./utils/FormatTime";
import Typography from '@mui/material/Typography';
import { allStates } from '../main';

export const stopwatchButtonStyle = {
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#121212',
  borderColor: '#BB86FC',
  borderRadius: '4px',
  fontFamily: 'Roboto',
  color: '#BB86FC',
}

const Stopwatch = (props) => {

  const english = allStates((state) => state.english)

  const { time, start, pause, reset, status } = useTimer();
  let statusTimer = english ? "start" : "iniciar"
  let button
   
  const checkStatusTimer = () => {
    if (status === 'RUNNING') {
      return statusTimer =  english ? "pause" : "pausar"
    } else if (status === 'PAUSED'){
      return statusTimer = english ? "resume" : "retornar"
    } else {
      return statusTimer = english ? "start" : "iniciar"
    }
  }

  if (status === 'RUNNING') {
    button = <button onClick={pause} style={stopwatchButtonStyle}>{checkStatusTimer()}</button>
  } else {
    button = <button onClick={start} style={stopwatchButtonStyle}>{checkStatusTimer()}</button>
  }

  return (
    <>    
     
      <div className={props.element ? 'timer timer-element--margin-and-padding-smaller' : 'timer timer--margin-and-padding-bigger'}>
        <Typography variant={props.element ? 'h6' : 'h1'} sx={[{backgroundColor: '#121212', color: '#BB86FC', borderRadius: '16px'}]}>
          {formatTime(time)}
        </Typography>
      </div>

      <div className={props.element ? 'buttons-div buttons-div--content-gap' : 'buttons-div buttons-div--content-justify-content'}>
        {button}
        <button onClick={reset} style={stopwatchButtonStyle}>{english ? "reset" : "reiniciar"}</button>
      </div>

    </>
  )
}

export default Stopwatch;