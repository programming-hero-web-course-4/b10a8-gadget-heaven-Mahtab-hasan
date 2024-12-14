import { useState } from 'react';
import './app/css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App(){
  const [count,setCount] = useState(0)
  return(
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;