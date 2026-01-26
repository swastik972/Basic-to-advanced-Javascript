import { useState } from 'react';

//Create a simple password visibility toggle.
 function PasswordToggle() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
            />
            <button onClick={toggleVisibility}>
                {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}
export default PasswordToggle;
