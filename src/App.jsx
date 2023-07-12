import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Detail from './pages/detail';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/auth/Login';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="866932345241-320c1fllsot5g3jbb1748lied0rar157.apps.googleusercontent.com">
        <Routes>
          <Route exact path="/" name="Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="summary/:id" name="Detail" element={<Detail />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
