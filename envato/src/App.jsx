import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />

      </Routes>
    </>
  )
}

export default App
