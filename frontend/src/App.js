import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

// pages
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/recipes/:id' element={<Details />}></Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
