import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const handlegoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect)
            })

    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handlegoogleLogin} className="btn btn-warning">Google Sign In</button>

        </div>
    );
};

export default Login;