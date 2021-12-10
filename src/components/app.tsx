import React, { FC, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Helmet } from 'react-helmet';
import config from '../../config';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: FC = () => (
  <Fragment>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Helmet>
          <title>{config.title}</title>
        </Helmet>
      </Container>
    </ThemeProvider>
  </ Fragment>
);

export default App;
