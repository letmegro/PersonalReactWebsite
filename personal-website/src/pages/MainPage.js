import './../App.css';
import Particle from './../components/Particle';
import { welcomeHTML } from './../components/HtmlSegments';
export const mainpage = () => {
    return (
        <div className="App">
            <Particle/>
            <header className="App-header">
            
            </header>
            <div id='info-div' >
                {welcomeHTML}
            </div>
        </div>
    );
}