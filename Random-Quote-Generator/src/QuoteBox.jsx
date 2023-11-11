import { useState, useEffect } from 'react';
import './App.css';

const QuoteBox = ({ onBgColorChange }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setCategory(data.tags && data.tags.length ? data.tags[0] : '');
      onBgColorChange();
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${quote}" - ${author}`;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div className="quote-box">
      <div className="quote-text">
        <p>"{quote}"</p>
      </div>
      <div className="quote-info">
        <p className="author">- {author}</p>
        <p className="category">{category}</p>
      </div>
      <div className="quote-actions">
        <button onClick={handleNewQuote}>New Quote</button>
        <button onClick={handleCopyQuote}>Copy Quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;
