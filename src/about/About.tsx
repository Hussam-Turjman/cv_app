

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeaturedPost from '../components/FeaturedPost';
import * as React from 'react';
import * as MainTemplate from '../MainTemplate'
import about_post from './about_post';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../components/Markdown';

export const posts = [about_post];

interface AppState {

}

interface AppProps {

}


class AboutPage extends React.Component<AppProps, AppState>{

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
export default AboutPage;

