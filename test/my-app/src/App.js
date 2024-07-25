import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
		const handleScroll = () => {
			const position = document.documentElement.scrollTop;
			console.log("scrolling position: ", position);
		}
		document.addEventListener("scroll", handleScroll)
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	})

return <div>Hellolll
  ll'
  ;\

  đfsd
  
</div>
}

export default App;
