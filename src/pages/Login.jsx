import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLogin);
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log(email, password);

        dispatch(login({ email: email, password: password }));
    }


    useEffect(() => {
        if (isLogin === false) {
            navigate("/login");
        } else if (isLogin === true) {
            navigate("/dashboard");
        }
    }, [isLogin]);

    return (
        <div>
            <input onChange={e => setEmail(e.target.value)} type='text' placeholder='email' />
            <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
