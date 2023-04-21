import React from 'react';
import { useNavigate } from 'react-router-dom';



const Step1Form = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <h1>Step 1</h1>
            <input
                type="name"
                placeholder="Enter your name"

            />
            <button >Previous</button>
            <button onClick={() => Navigate("/stepForm2")}>Next</button>
        </div>
    );
};


export default Step1Form;