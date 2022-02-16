

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import * as React from 'react';
import * as MainTemplate from '../MainTemplate'


interface AppState {

}

interface AppProps {

}


class PortfolioPage extends React.Component<AppProps, AppState>{

  constructor(props: AppProps) {

    super(props);


  }

  public render() {
    return (
      <ThemeProvider theme={theme}>

        <Container maxWidth="lg">


          <Header title={MainTemplate.main_title} sections={MainTemplate.sections} />


          <main>

           {/* TODO ADD CONTENT HERE */}
           <h1>Portfolio Work in progress ..</h1>
          </main>
        </Container>
        <Footer
          title={MainTemplate.footer_title}
          description={MainTemplate.footer_description}
        />
      </ThemeProvider>
    );
  }
}
export default PortfolioPage;

