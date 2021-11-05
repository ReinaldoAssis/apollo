import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Config from './pages/Config';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/config" component={Config} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
