import React, { useState } from 'react';
import axios from 'axios';

const DataForm = () => {
  const [value, setValue] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!value || !timestamp) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/data', {
        value: parseFloat(value),
        timestamp: new Date(timestamp).toISOString(),
      });
      setValue('');
      setTimestamp('');
    } catch (err) {
      if (err.response) {
        setError(`Error submitting data: ${err.response.data.message || err.response.statusText}`);
        console.error('Response error:', err.response.data);
      } else if (err.request) {
        setError('No response from server. Please try again later.');
        console.error('Request error:', err.request);
      } else {
        setError('Error submitting data');
        console.error('General error:', err.message);
      }
    }
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Value:</label>
          <input
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Timestamp:</label>
          <input
            type='datetime-local'
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default DataForm;
