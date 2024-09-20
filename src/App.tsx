import React, { useState } from 'react'
import './App.css'
import { MemoizedApp } from './components/WithMemo'
import { NonMemoizedApp } from './components/WithoutMemo'

const MainApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('memoized')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <div className='tabs'>
        <button
          className={activeTab === 'memoized' ? 'active' : ''}
          onClick={() => handleTabChange('memoized')}
        >
          Memoized App
        </button>
        <button
          className={activeTab === 'non-memoized' ? 'active' : ''}
          onClick={() => handleTabChange('non-memoized')}
        >
          Non-Memoized App
        </button>
      </div>

      <div className='tab-content'>
        {activeTab === 'memoized' && <MemoizedApp />}
        {activeTab === 'non-memoized' && <NonMemoizedApp />}
      </div>
    </div>
  )
}

export default MainApp
