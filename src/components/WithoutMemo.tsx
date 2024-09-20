import React, { useState, useEffect } from 'react'
import { expensiveCalculation, ExpensiveChildComponent } from '../Utils'

export const NonMemoizedApp: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countdown, setCountdown] = useState(10)

  const expensiveValue = expensiveCalculation(count)

  const handleClick = () => {
    setCount((c) => c + 1)
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  return (
    <div className='app-section'>
      <h1>Without Memoization (Laggy)</h1>
      <ExpensiveChildComponent expensiveValue={expensiveValue} />
      <button onClick={handleClick}>Increment Count</button>
      <h2>Countdown: {countdown > 0 ? countdown : "Time's up!"}</h2>
    </div>
  )
}
