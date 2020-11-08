import React from 'react'
import "./Login.css";
import Button from '@material-ui/core/Button';
import {auth , provider} from "./firebase"; 
import { actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";


function Login() {
    const [{user}, dispatch] = useStateValue();

    const signin = e => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch(
                {
                   type:  actionTypes.SET_USER,
                   user : result.user,
                }
            )
        })
        .catch((error) => {
            alert(error.message)
        })
        e.preventDefault();
    }
    return (
        <div className="login">

            <div className="login__logo">
                <img src="https://mybroadband.co.za/news/wp-content/uploads/2019/11/Facebook-logo-header.jpg" alt="" />
                
            </div>
            <Button type="submit" onClick={signin} >
                Sign In
            </Button>
            
        </div>
        
    )
}

export default Login
