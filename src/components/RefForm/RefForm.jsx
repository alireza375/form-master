import React, { useEffect, useRef } from 'react';

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)
        console.log(passwordRef.current.value)
    };

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} 
                    type="text" name='name' required/>
                <br />
                <input ref={emailRef} defaultValue={'ali@gmail.com'}
                    type="email" name='email' id='' required/>
                <br />
                <input ref={numberRef}
                    type="number" name='number' required/>
                <br />
                <input ref={passwordRef}
                    type="password" name='password' required/>
                <br />
                
                <input type="submit" value = "Submit" />
            </form>
        </div>
    );
};

export default RefForm;