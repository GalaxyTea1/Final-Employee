import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [err, setErr] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
    };

    return (
        <div className='register-container'>
            <div className='register-main'>
                <h1 className='font-bold text-[24px]'>Register</h1>
                <form>
                    <div className='form-control'>
                        <input
                            name='username'
                            type='email'
                            required={true}
                            placeholder='Enter Your Email'
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <div className='form-control'>
                        <input
                            name='password'
                            type='password'
                            required={true}
                            placeholder='Enter Your Password'
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <button className='btn-submit' onClick={handleSubmit} type='submit'>
                        Sign Up
                    </button>
                </form>
                <div className='check-error'>
                    <span>{err}</span>
                </div>
                <div className='sign-up'>
                    You have an account? <Link to='/login'>Sign In</Link>
                </div>
                <div className='forgot-pass'>Forgot Password?</div>
            </div>
        </div>
    );
}

export default Register;