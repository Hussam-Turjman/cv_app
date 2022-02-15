import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import ResponsiveAppBar from './AppBar'
import Divider from '@mui/material/Divider';

const sections = [
  { title: 'About', url: '#' },
  { title: 'CV', url: '#' },
  { title: 'Portfolio', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome to my personal website',
  //title:'',
  description:
    "I am a passionate data scientist with a decent experience in research and development.",
  //image: 'https://wallpaperboat.com/wp-content/uploads/2020/04/minimalist-aesthetic-wallpaper-12.jpg',
  //image:'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/08.jpg',
  image:'https://hdwallpaperim.com/wp-content/uploads/2017/08/31/163851-minimalism-748x468.jpg',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
       <ResponsiveAppBar/>
       <Divider variant="middle" />
    
       {/*
       <Header title="Personal Website of Hussam Al Turjman" sections={sections} />
       */}
        
       
        
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
           {/* 
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
            */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
}
