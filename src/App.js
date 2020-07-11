import React from 'react';
import './App.scss';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
});
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
