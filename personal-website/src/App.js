import './App.css';
import Particle from './components/Particle';
import { welcomeHTML } from './components/HtmlSegments';
import DOMPurify from 'dompurify';

let cleanHTML = DOMPurify.sanitize(welcomeHTML);

function App() {
  return (
    <div className="App">
      <Particle/>
      <header className="App-header">
      
      </header>
      <div id='info-div' dangerouslySetInnerHTML={{__html: cleanHTML}} >
        
      </div>
    </div>
  );
}

export default App;

