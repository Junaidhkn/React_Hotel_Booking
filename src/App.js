import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home'
import List from './pages/list/List'
import HotelDetail from './pages/hotel/HotelDetail'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App