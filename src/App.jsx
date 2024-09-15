
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Sidebar from './components/Sidebar'
import Favorites from './pages/Favorites'
const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App