import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialUIContainer from '@material-ui/core/Container';
import { polyfill } from 'es6-promise';
import theme from '../styles/theme';

polyfill();

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MaterialUIContainer maxWidth="sm">
            <Component {...pageProps} />
          </MaterialUIContainer>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
