import React from 'react'
import useForm from '../../hooks/useForm'
import validate from '../../validate/validate'
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)
    return (
        <>
            <div className='Login'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='form-inputs'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-input'
                            value={values.email}
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-input'
                            value={values.password}
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button className='form-input-btn'>
                        Login
                    </button>
                    <span className='form-new-user'>
                        Don't have an account? Sign in 
                    </span>
                    <button className='form-input-btn'>
                       <Link className='sign-link' to={"/signup"}> Sign In</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login