
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
  return (
    <>
        <div className = "App-container">
          <div className="App-item">
            <img className="App-img" src={img001}/>
            <section>#001</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-grass" >Grass</span>
            <span className="App-poison">Poison</span>
         </div>
           
           
          <div className="App-item">
            <img className="App-img" src={img002}/>
            <section>#002</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-grass" >Grass</span>
            <span className="App-poison">Poison</span>
           </div>

           <div className="App-item">
            <img className="App-img" src={img003}/>
            <section>#003</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-grass" >Grass</span>
            <span className="App-poison">Poison</span>
           </div>

          <div className="App-item">
            <img className="App-img" src={img004}/>
            <section>#004</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-fire" >Fire</span>
          
          </div>

          <div className="App-item">
            <img className="App-img" src={img005}/>
            <section>#005</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-fire" >Fire</span>
           </div>
          
           <div className="App-item">
            <img className="App-img" src={img006}/>
            <section>#006</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-fire" >Fire</span>
            <span className="App-flying">Flying</span>
           </div>
          
          <div className="App-item">
            <img className="App-img" src={img007}/>
            <section>#007</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-water" >Water</span>
            
          </div>
          
          <div className="App-item">
            <img className="App-img" src={img008}/>
            <section>#008</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-water" >Water</span>
           </div>
        
           <div className="App-item">
            <img className="App-img" src={img009}/>
            <section>#009</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-water" >Water</span>
           </div>
           <div className="App-item">
            <img className="App-img" src={img010}/>
            <section>#010</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-bug" >Bug</span>
           </div>

           <div className="App-item">
            <img className="App-img" src={img011}/>
            <section>#011</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-bug" >Bug</span>
           </div>
          
           <div className="App-item">
            <img className="App-img" src={img012}/>
            <section>#012</section>
            <section className='App-name'>Bulbasaur</section>
            <span className="App-bug" >Bug</span>
            <span className="App-flying">Flying</span>
           </div>


        </div>
        
    
    </>

  );
}
// class = className, trong style={là 1 object}
export default App;
