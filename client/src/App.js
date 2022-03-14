import { createBrowserHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LayoutHome from './components/layout/Layout';
import Login from './components/LoginForm/Login';
import Register from './components/RegisterForm/Register';
export const history = createBrowserHistory();

function App() {
    return (
        <div className='App'>
            <Routes history={history}>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Login />} />
                <Route path='/home/*' element={<LayoutHome />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
