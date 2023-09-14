
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Firstpage from './firstpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/' element={<Firstpage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
