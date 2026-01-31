import { useState } from 'react';

//Build a click tracker that counts how many times a specific area is clicked.
function ClickTracker() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div>
            <div
                onClick={handleClick}
                style={{
                    padding: '50px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    fontSize: '18px',
                    userSelect: 'none'
                }}
            >
                Click me!
            </div>
            <p style={{ marginTop: '20px', fontSize: '20px' }}>
                Total Clicks: <strong>{clickCount}</strong>
            </p>
        </div>
    );
}
export default ClickTracker;