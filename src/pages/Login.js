import React from 'react'
import { facebookLogo, googleLogo } from '../assets/index';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/logoSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            })
          );
          setTimeout(()=>{
            navigate("/")
          },1500);

        }).catch((error) => {
          console.log(error);
        }); 
    };

    const handleFacebookLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, FacebookProvider)
            .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            })
          );
          setTimeout(()=>{
            navigate("/")
          },1500);

        }).catch((error) => {
          console.log(error);
        }); 
    };

    const handleSignOut = () => {
        signOut(auth)
        .then(()=> {
            dispatch(removeUser());
            toast.success("Sign Out Successfully!");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
        justify-center gap-2 cursor-pointer duration-300 hover:border-blue-600'> 
            <img className='w-8'src={googleLogo} alt="google"/>
            <span className='text-sm text-gray-900'>Sign in with Google</span>
        </div>
        <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
      </div>
      <div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleFacebookLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
            justify-center gap-2 cursor-pointer duration-300 hover:border-blue-600'> 
                <img className='w-8'src={facebookLogo} alt="google"/>
                <span className='text-sm text-gray-900'>Sign in with Facebook</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
        </div>
        <ToastContainer 
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
    />
      </div>
    </div>
  )
}

export default Login;
