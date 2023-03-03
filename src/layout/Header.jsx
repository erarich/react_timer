import Typography from '@mui/material/Typography';
import { allStates } from '../main'

export const buttonStyle = {
  backgroundColor: "#121212",
  border: "none",
  cursor: "pointer",
}

const Header = () => {

  const english = allStates((state) => state.english)
  const setLanguages = allStates((state) => state.setLanguages)
  
  let languageButtonEnglish = 
    <button style={buttonStyle} onClick={() => {setLanguages()}}>
      <Typography variant='body1' sx={[{color: '#BB86FC',},]}>
        <strong>{english ? "Idiom: " : "Idioma: "}</strong>English
      </Typography>
    </button>

  let languageButtonPTBR = 
    <button style={buttonStyle} onClick={() => {setLanguages()}}>
      <Typography variant='body1' sx={[{color: '#BB86FC',},]}>
        <strong>{english ? "Idiom: " : "Idioma: "}</strong>PT-BR
      </Typography>
    </button>

  return (
    <header className='header'>

        <Typography variant='h6' sx={[{color: '#BB86FC',},]}>
          {english ? "MULTIPLE STOPWATCHES" : "MÚLTIPLOS CRONÔMETROS"}
        </Typography>

        <Typography variant='body1' sx={[{color: '#BB86FC',},]}>
          <a href="https://github.com/erarich/react_timer">{english ? "source code" : "código fonte"}</a> 
        </Typography>

      <div className='header__buttons'>
        {english ? languageButtonEnglish : languageButtonPTBR}
      </div>

    </header>
  )
}

export default Header;