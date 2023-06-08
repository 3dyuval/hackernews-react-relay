import './App.css'
import { Feed } from '@/components/Feed'
import { Route, Routes } from 'react-router-dom'
import Comments from './components/Comments'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <div className="app-header">
        <h1>Y Hacker News</h1>
      </div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/link/:link"
          element={
            <Suspense fallback="loading">
              <Comments />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App
