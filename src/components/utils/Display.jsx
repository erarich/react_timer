import { useTimer } from 'use-timer';
import { formatTime } from './FormatTime';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

const Display = (inputedTime) => {

  console.log(inputedTime)

  let timinho = inputedTime.inputedTime

  const { time, start, pause, reset, status } = useTimer({
    initialTime: timinho,
    endTime: 0,
    timerType: "DECREMENTAL",
  }); 
 
  return (
    <>
    <div className='timerStopwatch'>
      <Typography variant="h4" component="h2">
        {formatTime(time)}
      </Typography>
    </div>

    <br />

    <Button onClick={start} variant="outlined">start</Button>
    <Button onClick={pause} variant="outlined" color="success">pause</Button>
    <Button onClick={reset} variant="outlined" color="error">reset</Button>
    </>
  )
}

export default Display;