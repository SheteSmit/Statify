import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import AllPlaylists from './pages/AllPlaylists'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/scores" element={<AllPlaylists />} />
    </Routes>
  )
}

export default App;