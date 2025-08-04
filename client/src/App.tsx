import './App.css'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
