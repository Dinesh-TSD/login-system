import React from 'react'
import useForm from '../../hooks/useForm'
import validate from '../../validate/validate'
import { Link } from "react-router-dom"
import "./Signup.css"


const Signup = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)
    return (
        <>
            <div className='Register'>
                <form className='form-r' onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='username'>Name</label>
                        <input
                            type='text'
                            className='form-input-r'
                            value={values.username}
                            id='username'
                            name='username'
                            placeholder='Enter your name'
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-input-r'
                            value={values.email}
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-input-r'
                            value={values.password}
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='password2'>Confirm Password</label>
                        <input
                            type='password'
                            className='form-input-r'
                            value={values.password2}
                            id='password2'
                            name='password2'
                            placeholder='Re-Enter your password'
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className='form-input-btn-r'>
                        Sign In
                    </button>
                    <span className='form-new-user-r'>
                        Already have an account? Login 
                    </span>
                    <button className='form-input-btn-r'>
                        <Link className='sign-link-r' to={"/login"}> Login</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup