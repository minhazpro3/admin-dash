import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Component/pages/Login/Login';
import Register from './Component/pages/Register/Register';
import PrivateRoute from './Component/pages/PrivateRoute/PrivateRoute';
import Dashboard from './Component/pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
