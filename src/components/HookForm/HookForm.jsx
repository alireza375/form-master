import React from 'react';
import useInputState from '../../Hooks/UseInputState';

const HookForm = () => {

    const [name, handleNameChange] = useInputState('ALi Reza');
    const [email, handleEmailChange] = useInputState('ali@gmail.com');
    const [password, handlePasswordChange] = useInputState('123456');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form name', name);
        console.log('Form email', email);
        // console.log(e.target.password.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name}
                    type="text" name='name'/>
                <br />
                <input onChange={handleEmailChange} value={email}
                    type="email" name='email' id=''/>
                <br />
                <input onChange={handlePasswordChange} value={password}
                    type="password" name='password' />
                <br />
                
                <input type="submit" value = "Submit" />
            </form>
        </div>
    );
};

export default HookForm;