import React, { useState } from 'react';
import axios from 'axios';

const CreateScript = () => {
  const [script, setScript] = useState('');
  const [response, setResponse] = useState('');

  const handleCreateScript = async () => {
    try {
      const res = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: script,
        max_tokens: 100
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        }
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Script</h2>
      <textarea value={script} onChange={(e) => setScript(e.target.value)} placeholder="Enter your script prompt"></textarea>
      <button onClick={handleCreateScript}>Generate Script</button>
      <div>{response}</div>
    </div>
  );
};

export default CreateScript;
