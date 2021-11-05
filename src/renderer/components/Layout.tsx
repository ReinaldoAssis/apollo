import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Settings, Category, Widgets } from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Layout.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#4652E6',
    },
  },
});

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  const history = useHistory();
  const [locale, setLocale] = useState('');

  function goto(path: string) {
    history.push(path);
    //setLocale(path);
    setLocale(path);
    console.log(locale);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Drawer
          sx={{
            width: 240,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              boxShadow: '4px 1px 13px 0px rgba(0,0,0,0.2)',
            },
          }}
          variant="permanent"
          anchor="left"
          classes={{}}
        >
          <ListItem
            button
            onClick={() => goto('/')}
            className={locale == '/' ? 'tabSelecionada' : ''}
          >
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Apollo" />
          </ListItem>

          <ListItem
            button
            onClick={() => goto('/config')}
            className={locale == '/config' ? 'tabSelecionada' : ''}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Configuration" />
          </ListItem>

          <ListItem
            button
            onClick={() => goto('/scripts')}
            className={locale == '/scripts' ? 'tabSelecionada' : ''}
          >
            <ListItemIcon>
              <Widgets />
            </ListItemIcon>
            <ListItemText primary="Scripts" />
          </ListItem>
        </Drawer>
        {children}
      </ThemeProvider>
    </div>
  );
}
