import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import { Login } from './components/pages/login/login';
import { Home } from './components/pages/home/Home';
import { NotFound } from './components/errors/NotFound';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
