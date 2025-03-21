import React, { useState } from 'react';

const StateFullForm = () => {
   
    const [name, setName] = useState('ALi Reza');
    const [email, setEmail] = useState('ali@gmail.com');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            
        } else {
            setError('');
            console.log(name, email, password);
        }
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name='name'/>
                <br />
                <input onChange={handleEmailChange} 
                   value={email} type="email" name='email' id=''/>
                <br />
                <input onChange={handlePasswordChange}
                   value={password}
                    type="password" name='password' />
                <br />
                
                <input type="submit" value = "Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;