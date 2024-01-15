import { useState } from 'react'
import './App.css'
import Rate from './Components/Rate/Rate'
import Result from './Components/Result/Result'

function App() {
  const [rate, setRate] = useState(0);
  
  return (
    <div className='wrapperDiv'>
      {rate === 0 ? <Rate rate={rate} setRate={setRate}/> : <Result />}
    </div>
  )
}

export default App
