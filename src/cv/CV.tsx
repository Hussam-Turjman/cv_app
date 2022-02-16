

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Header from '../components/Header';
import Footer from '../components/Footer';

import * as React from 'react';
import * as MainTemplate from '../MainTemplate'
import cv_post from './cv_post'
import Markdown from '../components/Markdown';

export const posts = [cv_post];

interface AppState {

}

interface AppProps {

}


class CVPage extends React.Component<AppProps, AppState>{

    constructor(props: AppProps) {

        super(props);


    }

    public render() {
        return (
            <ThemeProvider theme={theme}>

                <Container maxWidth="lg">


                    <Header title={MainTemplate.main_title} sections={MainTemplate.sections} />


                    <main>

                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                '& .markdown': {
                                    py: 3,
                                },
                            }}
                        >


                            {posts.map((post) => (
                                <Markdown className="markdown" key={post.substring(0, 40)}>
                                    {post}
                                </Markdown>
                            ))}
                        </Grid>
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
export default CVPage;

