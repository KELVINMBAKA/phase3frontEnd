import './App.css';
import ServicesPage from './components/ServicesPage';
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import ServiceDetails from './components/ServiceDetailsPage';
import ClientsPage from './components/ClientsPage';
import ClientDetailsPage from './components/ClientDetailsPage';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/services/:id">
          <ServiceDetails />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/clients/:id">
          <ClientDetailsPage />
        </Route>
        <Route path="/clients">
          <ClientsPage />
        </Route>
        <Route exact path="/">
          <ServicesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
