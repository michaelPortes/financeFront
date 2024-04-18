import { Route, Routes } from 'react-router-dom';
import Menu from './routes/menu/menu.component';
import Home from './routes/home/home.component';

import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<Menu />}>
        <Route exact index element={<Home />}/>
      </Route>
    </Routes>
    </ div>
  )
}

export default App;
