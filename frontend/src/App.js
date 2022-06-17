import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import AllPlaylists from './pages/AllPlaylists'
import Temp from './pages/Temp'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/scores" element={<AllPlaylists />} />
      <Route path="/temp" element={<Temp />}/>
    </Routes>
  )
}

export default App;