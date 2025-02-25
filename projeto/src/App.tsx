import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import { Login } from './components/pages/login/login';
import { Home } from './components/pages/home/Home';
import { NotFound } from './components/errors/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <AuthProvider><Route path="/home" element={<Home />} /></AuthProvider>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
