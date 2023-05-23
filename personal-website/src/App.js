import './App.css';
import Particle from './components/Particle';

function App() {
  return (
    <div className="App">
      <Particle/>
      <header className="App-header">
      
      </header>
      <div className='info-div'>
        <h1 id='welcome-h1'>
          Welcome
        </h1>
        <h2 className='sentence-sec'>
         <br/> My name is Nicolas Korsunski
        </h2>
        <h2 className='sentence-sec'>
        <br/> And this is my online resume
        </h2>
        <h2 className='sentence-sec'>
        <br/> And Portfolio.
        </h2>
        
      </div>
    </div>
  );
}

export default App;
