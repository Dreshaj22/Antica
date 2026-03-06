import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  )
}
