import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { Drawer, Typography } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (d) =>
  createStyles({
    drawe: {
      width,
    },
  });

const Hello = () => {
  return (
    <div>
      <Drawer
        style={{ width: 240 }}
        variant="permanent"
        anchor="left"
        classes={{}}
      >
        <Typography variant="h5">Apollo</Typography>
      </Drawer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
