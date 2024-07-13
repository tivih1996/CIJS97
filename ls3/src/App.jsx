import React from 'react'
import CardPerform from './components(rfce)/cardPokemon/CardPerform.jsx';



function App() {
  

    return (
      <CardPerform hello={(name)=> alert(name +' xin chào!')} />
    );
}

// class = className, trong style={là 1 object}
export default App;
