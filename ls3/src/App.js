

import './App.css';
import img001 from "./images/001.png"
import img002 from "./images/002.png"
import img003 from "./images/003.png"
import img004 from "./images/004.png"
import img005 from "./images/005.png"
import img006 from "./images/006.png"
import img007 from "./images/007.png"
import img008 from "./images/008.png"
import img009 from "./images/009.png"
import img010 from "./images/010.png"
import img011 from "./images/011.png"
import img012 from "./images/012.png"

function App() {
    const card =[
      {name: 'Bulbasaur',number: '#0001',img: img001 , attribute1: 'Grass',attribute2: 'Poison' },
      {name: 'Ivysaur',number: '#0002',img: img002 , attribute1: 'Grass',attribute2: 'Poison' },
      {name: 'Venusaur',number: '#0003',img: img003 , attribute1: 'Grass',attribute2: 'Poison' },
      {name: 'Charmander',number: '#0004',img: img004 , attribute1: 'Fire',attribute2: '' },
      {name: 'Charmeleon',number: '#0005',img: img005 , attribute1: 'Fire',attribute2: ''  },
      {name: 'Charizard',number: '#0006',img: img006 , attribute1: 'Fire',attribute2: 'Flying'  },
      {name: 'Squirtile',number: '#0007',img: img007 , attribute1: 'Water',attribute2: ''  },
      {name: 'Wartortle',number: '#0008',img: img008 , attribute1: 'Water',attribute2: ''  },
      {name: 'Blastoise',number: '#0009',img: img009 , attribute1: 'Water',attribute2: ''  },
      {name: 'Caterpie',number: '#0010',img: img010 , attribute1: 'Bug',attribute2: '' },
      {name: 'Metapod',number: '#0011',img: img011 , attribute1: 'Bug',attribute2: ''},
      {name: 'Butterfree',number: '#0012',img: img012 , attribute1: 'Bug',attribute2: 'Flying' }
]
    
return (
  <div className="App-container">
            {card.map((card, index) => (
                <div key={index} className="App-item">
                    <img className="App-img" src={card.img} alt={card.name} />
                    <section>{card.number}</section>
                    <section className='App-name'>{card.name}</section>
                    <span className={`App-${card.attribute1}`}>{card.attribute1}</span>
                    <span className={`App-${card.attribute2}`}>{card.attribute2}</span>
                </div>
            ))}
        </div>
);
}
  
// class = className, trong style={là 1 object}
export default App;
