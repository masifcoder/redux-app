import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const isLogin = useSelector( state => state.auth.isLogin);
    const navigate = useNavigate();


    useEffect( () => {
        if(isLogin === false) {
            navigate('/');
        }   
    })
    
    if(!isLogin) return null;

    return children
}

export default ProtectedRoutes