import React from 'react'

export const expensiveCalculation = (count: number) => {
  console.log('Performing expensive calculation...')
  const start = Date.now()
  while (Date.now() - start < 1000) {
    // Simulate expensive operation with a 1-second delay
  }
  return count * 1000
}

export const ExpensiveChildComponent: React.FC<{ expensiveValue: number }> =
  React.memo(({ expensiveValue }) => {
    console.log('Rendering ExpensiveChildComponent')
    return <p>Expensive Value: {expensiveValue}</p>
  })
