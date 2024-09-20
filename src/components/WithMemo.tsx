import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { expensiveCalculation, ExpensiveChildComponent } from '../Utils'
export const MemoizedApp: React.FC = () => {
  const [count, setCount] = useState(0)
  const [countdown, setCountdown] = useState(10)

  const expensiveValue = useMemo(() => {
    return expensiveCalculation(count)
  }, [count])

  const handleClick = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

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
      <h1>With Memoization</h1>
      <ExpensiveChildComponent expensiveValue={expensiveValue} />
      <button onClick={handleClick}>Increment Count</button>
      <h2>Countdown: {countdown > 0 ? countdown : "Time's up!"}</h2>
    </div>
  )
}
