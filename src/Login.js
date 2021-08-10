import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react'
import { auth } from './firebase';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleLoign = async e  =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email.password)
            .then(auth =>{
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }
    const handleSingup = async e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{
                console.log(auth);
            }).catch(error => alert(error.message))
    }
    return (
        <form className="login" style={{margin: 'auto', width:'50%',padding:"3rem"}}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Enter your email" />
            <Input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <Button className="btn" onClick={handleLoign}>login</Button>
            <Button className="btn" onClick={handleSingup}>create account</Button>
        </form>
    )
}

export default Login
