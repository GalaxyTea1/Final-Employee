import { createBrowserHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginForm/Login';
import Register from './components/RegisterForm/Register';
import Home from './pages/Home/Home';
export const history = createBrowserHistory();

function App() {
    return (
        <div className='App'>
            {/* <Routes history={history}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes> */}
            <Home />
        </div>
    );
}

export default App;
