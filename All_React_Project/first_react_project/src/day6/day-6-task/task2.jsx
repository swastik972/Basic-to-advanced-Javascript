import { useState } from "react";
function ToggleText() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            {isVisible && <p>Hello, I am visible! 👀</p>}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>
    );
}
export default ToggleText;