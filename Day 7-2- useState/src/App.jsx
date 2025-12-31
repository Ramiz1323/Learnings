import React, { useState } from 'react'

const App = () => {

  const [result, setResult] = useState(0)
  const plus = () => {
    setResult(result + 1)
  }
  const minus = () => {
    setResult(result - 1)
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-7xl'>{result}</h1>
      <button className='bg-white text-black! m-3! p-3! w-50 text-2xl ' onClick={plus}>Increase</button>
      <button className='bg-white text-black! m-3! p-3! w-50 text-2xl ' onClick={minus}>Decrease</button>
    </div>
  )
}

export default App
