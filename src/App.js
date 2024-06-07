import logo from './logo.svg';
import './App.css';
import Addalbum from './components/Addalbum';
import Delete from './components/Delete';
import Search from './components/Search';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addalbum/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view' element={<Viewall/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
