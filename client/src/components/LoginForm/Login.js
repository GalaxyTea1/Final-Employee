import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [err, setErr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
    };

    return (
        <div className='login-container'>
            <div className='login-main'>
                <h1 className='font-bold text-[24px]'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <input
                            type='email'
                            required={true}
                            placeholder='Enter Your Email'
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <div className='form-control'>
                        <input
                            type='password'
                            required={true}
                            placeholder='Enter Your Password'
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <button className='btn-submit' type='submit'>
                        Login
                    </button>
                </form>
                <div className='check-error'>
                    <span>{err}</span>
                </div>
                <div className='sign-up'>
                    Not a member? <Link to='/register'>Sign Up</Link>
                </div>
                <div className='forgot-pass'>Forgot Password?</div>
            </div>
        </div>
    );
}

export default Login;