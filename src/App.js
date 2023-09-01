import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import New from './pages/New'
import More from './pages/More'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/new/:id' exact element={<New />} />
          <Route path='/more' exact element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
