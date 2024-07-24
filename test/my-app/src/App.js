import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup khi component unmount
    return () => clearInterval(interval);
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <div>
      Timer: {count}
    </div>
  )
}

export default App;
