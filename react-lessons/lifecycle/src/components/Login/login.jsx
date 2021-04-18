import React from 'react';

export function Login ({ isLoggedIn, handleLogin }){
    return (
    	<button onClick={handleLogin}>{isLoggedIn ? 'Log Out' :  'Log In'}</button>
    );
}