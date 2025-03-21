import { useState } from "react";

const useInputState = (defaultValue='') => {
    const [value, setValue] = useState(defaultValue);

    // const onChange = e => {
    //     setValue(e.target.value);
    // }
    const handleChange = e => {
        setValue(e.target.value);
    }

    // return [value, handleChange];
    return [
        value,
        handleChange
    ]
       
    
};

export default useInputState;