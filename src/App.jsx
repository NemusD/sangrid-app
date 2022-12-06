import React, { useState } from 'react';
import axios from 'axios';
/* import logo from './logo.svg';
import './App.css'; */

function App() {
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const [to, setTo ] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [html, setHtml] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post('/api/mail', { to, subject, text, html });
      setSent(true)
      setError(null);
    }catch(err) {
      setError(err.response.data)

    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input value={to} onChange={(e) => setTo(e.target.value)} placeholder='To'></input>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject'></input>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Text'></input>
      <input value={html} onChange={(e) => setHtml(e.target.value)} placeholder='Html code'></input>
      <button type='submit'>Submit</button>
    </form>
    {error && error}
    {sent && <p>Sent Email !!</p>}
    </div>
  ); 
}

export default App;
