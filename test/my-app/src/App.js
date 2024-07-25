import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	// Sử dụng useEffect
	useEffect(() => {
		document.title = "Tieu De " + count;
	})

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
        			Click me
      			</button>
		</div>
	); 
}

export default App;
