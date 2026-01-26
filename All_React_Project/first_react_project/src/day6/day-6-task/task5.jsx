import React, { useState } from 'react';

//Make a random quote generator with a "New Quote" button.
 function QuoteGenerator() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It is during our darkest moments that we must focus to see the light. - Aristotle"
    ];

    const [quote, setQuote] = useState(quotes[0]);

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Quote Generator</h1>
            <p style={{ fontSize: '18px', fontStyle: 'italic' }}>{quote}</p>
            <button onClick={getNewQuote}>New Quote</button>
        </div>
    );
}
export default QuoteGenerator;