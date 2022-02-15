import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import ResponsiveAppBar from './AppBar'
import Divider from '@mui/material/Divider';

const sections = [
  { title: 'About', url: '#' },
  { title: 'CV', url: '#' },
  { title: 'Portfolio', url: '#' },
  { title: 'Service', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome to my personal website',
  //title:'',
  description:
    "I am a professional software engineer and a passionate data scientist with a decent experience in research and development.",
  //image: 'https://wallpaperboat.com/wp-content/uploads/2020/04/minimalist-aesthetic-wallpaper-12.jpg',
  //image:'https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/08.jpg',
  image:'https://wallpapercave.com/wp/wp4533125.jpg',
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

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'My name is Hussam Turjman and I am a professional software engineer based in Bremen, Germany. I am interested in developing intelligent and efficient machine learning models.',
  archives: [
    { title: 'work in progress ..', url: '#' },
  ],
  social: [
    { name: 'Email', icon: EmailIcon,link:"mailto:hussam.turjman@gmail.com" },
    { name: 'GitHub', icon: GitHubIcon,link:"https://github.com/Hussam-Turjman" },
    { name: 'LinkedIn', icon: LinkedInIcon,link:"https://www.linkedin.com/in/mohammed-hussam-al-turjman-36ab761ab/" },
  
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
            <Main title="Recent blog posts" posts={posts} />
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
