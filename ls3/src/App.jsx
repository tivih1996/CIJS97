import React from 'react'
import CardPerform from './components(rfce)/cardPokemon/CardPerform.jsx';

function hello(name) {
  return alert(name +' xin chào!')
}

function App() {
  

    return (
      <CardPerform hello={hello} />
    );
}

// class = className, trong style={là 1 object}
export default App;
