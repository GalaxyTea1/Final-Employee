import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LayoutHome from "./components/layout/Layout";
import Login from "./components/LoginForm/Login";
import Register from "./components/RegisterForm/Register";
import EditEmployee from "./components/UpdateEmployee/EditEmployee";
export const history = createBrowserHistory();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/user/is-verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });
      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <div className='App'>
      <Routes history={history}>
        <Route
          path=''
          element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to='/home' />}
        />
        <Route path='/edit-employee' element={<EditEmployee />} />
        <Route
          path='/login'
          element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to='/home' />}
        ></Route>
        <Route
          path='/register'
          element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate to='/home' />}
        />
        <Route
          path='/home/*'
          element={isAuthenticated ? <LayoutHome setAuth={setAuth} /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
}

export default App;
