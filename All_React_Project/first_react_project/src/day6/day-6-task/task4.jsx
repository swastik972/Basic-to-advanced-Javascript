import { useState } from 'react';

//Build a traffic light simulator with red, yellow, and green lights switching on click.
 function TrafficLight() {
    const [light, setLight] = useState('red');

    const lights = ['red', 'yellow', 'green'];
    const currentIndex = lights.indexOf(light);
    const nextLight = lights[(currentIndex + 1) % lights.length];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Traffic Light Simulator</h1>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: light,
                    margin: '20px auto',
                }}
            />
            <button onClick={() => setLight(nextLight)}>
                Next Light
            </button>
            <p>Current: {light.toUpperCase()}</p>
        </div>
    );
}
export default TrafficLight;