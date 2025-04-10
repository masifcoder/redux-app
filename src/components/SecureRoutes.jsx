import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SecureRoutes = ({children}) => {

    const isLogin = useSelector(state => state.auth.isLogin);
    const navigate = useNavigate();

    useEffect( () => {
        console.log("secure routes")
        if(isLogin === false) {
            navigate("/login");
        }
    }, [isLogin]);

    if(isLogin === false) {
        return null;
    }


    return children;
}

export default SecureRoutes