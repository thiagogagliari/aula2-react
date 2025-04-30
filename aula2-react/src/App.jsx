import './App.css'
import Nomes from './components/Nomes/pessoas'

function App() {
  return (
    <>
      <Nomes nome="Thiago" cidade="Recife" idade="39" />
      <br /><br />
      <Nomes nome="Isabella" cidade="São Paulo" idade="26" />
      <br /><br />
      <Nomes nome="Lorenzo" cidade="Porto Alegre" idade="12" />
    </>
  )
}

export default App