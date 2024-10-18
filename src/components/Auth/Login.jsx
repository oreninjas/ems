import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('Email is: ', email);
        console.log('Password is: ', password);


        setEmail('')
        setPassword('')
    }


    return (
        <div className='bg-zinc-800 flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center '>
                    <input value={email} onChange={(e)=>{ setEmail(e.target.value)}} required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-xl text-white outline-none bg-transparent' type="email" placeholder='Enter your e-mail' />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-xl text-white outline-none mt-3 bg-transparent' type="password" placeholder='Enter Password' />
                    <button type='submit' className='bg-emerald-600 py-3 px-10 rounded-full text-xl text-white outline-none mt-5'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
