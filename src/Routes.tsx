import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;