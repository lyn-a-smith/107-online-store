import { useState } from "react";

function About2() {
    // const [state, setState] = useState(initialState);
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function showEmail() {
        setIsEmailVisible(true);
    }

    function hideEmail() {
        setIsEmailVisible(false);
    }

    return (
        <div className="text-center">
            <h1>Welcome to Our About Page</h1>

            { 
            (isEmailVisible == true) 
            ? <p className="fs-4 text-danger-emphasis">fakeemail@example.com</p> 
            : <p>Click the button below to reveal the email.</p> 
            }
           
            <button className="btn btn-dark me-4" onClick={hideEmail}>Hide My Email</button>
            <button className="btn btn-dark" onClick={showEmail}>Show My Email</button>
            
        </div>
    );
}

export default About2;