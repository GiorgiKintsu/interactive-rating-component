import { useState } from 'react'
import './App.css'
import Rate from './Components/Rate/Rate'
import Result from './Components/Result/Result'

function App() {
  const [number, setNumber] = useState(false)
  const [submit, setSubmit] = useState(0);
  
  return (
    <div className='wrapperDiv'>
      {submit ? <Result number={number} /> : <Rate setNumber={setNumber} setSubmit={setSubmit} number={number}/>}
    </div>
  )
}

export default App
