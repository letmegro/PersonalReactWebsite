import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { contactpage } from "./pages/ContactPage";
import { mainpage } from "./pages/MainPage";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <mainpage />
                </Route>
            </Switch>
        </Router>
    );
}