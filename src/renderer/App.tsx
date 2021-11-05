import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Config from './pages/Config';

const Hello = () => {
  return <div></div>;
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/config" component={Config} />
          <Route path="/" component={Hello} />
        </Switch>
      </Layout>
    </Router>
  );
}
