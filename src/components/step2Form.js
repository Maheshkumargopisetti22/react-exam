import React from 'react';
import { useNavigate } from 'react-router-dom';



const Step2Form = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <h1>Step 2</h1>
            <input
                type="email"
                placeholder="Enter your email"

            />
            <button >Previous</button>
            <button onClick={() => Navigate("/stepForm3")}>Next</button>
        </div>
    );
};


export default Step2Form;
