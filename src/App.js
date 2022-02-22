import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<SignUp/>} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;