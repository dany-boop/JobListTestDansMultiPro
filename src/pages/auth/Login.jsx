import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import Dashboard from '../dashboard';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className='text-2xl mt-40 text-center font-bold'>Login menggunakan Google</h1>
      <div className=" w-96 h-96 py-36 px-20 bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mx-auto rounded-xl border border-3">
        <GoogleLogin
          onSuccess={() => navigate('/dashboard')}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </>
  );
};

export default Login;
