import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {

  const {loading} = useSelector(state => state.alerts);

  return (
    <div className="app">
      <BrowserRouter>
        { loading && (
          <div className='spinner-parent'>
            <div className="spinner-border" role="status"></div>
          </div>
        )
        }

        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path='/' element={<PublicRoute><Welcome /></PublicRoute>}></Route>
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>}></Route>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
