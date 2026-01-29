import React, { useState } from 'react';

const Task7 = () => {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.quoteBox}>
        <h1 style={styles.title}>Random Quote Generator</h1>
        <div style={styles.quoteContent}>
          <p style={styles.quoteText}>"{currentQuote.text}"</p>
          <p style={styles.quoteAuthor}>- {currentQuote.author}</p>
        </div>
        <button onClick={getRandomQuote} style={styles.button}>
          New Quote
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  },
  quoteBox: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '40px',
    maxWidth: '600px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  title: {
    color: '#333',
    marginBottom: '30px',
    fontSize: '2rem'
  },
  quoteContent: {
    margin: '30px 0'
  },
  quoteText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  quoteAuthor: {
    fontSize: '1.2rem',
    color: '#777',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold'
  }
};

export default Task7;