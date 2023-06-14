import { BrowserRouter as Router, Route} from 'react-router-dom'
import { contactpage } from "./pages/ContactPage";
import { mainpage } from "./pages/MainPage";

export const Routes_link = () => {
    return (
        <Router>
                <Route path="/" element={mainpage}/>
                <Route path="/contact" element={<contactpage/>} />
        </Router>
    );
}