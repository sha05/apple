import App from 'next/app'
import '../assets/css/index.css'
import { theme } from '../assets/muliStyles/styles';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title> sirisha MoneyApp Assignment</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
          <Component {...pageProps} />
    </ThemeProvider>
    )
  }
}