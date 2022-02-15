
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {  ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Header from './components/Header';
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import post1 from './posts/post_1';
import ListRouter from './components/ListRouters'

const main_title = "";
const footer_title = "";
const footer_description = "";
const about_description = 'My name is Hussam Turjman and I am a professional software engineer based in Bremen, Germany. I am interested in developing intelligent and efficient machine learning models.';

const sections = [
  { title: 'About', url: 'about' },
  { title: 'CV', url: 'cv' },
  { title: 'Portfolio', url: 'portfolio' },
  { title: 'Service', url: 'service' },
];

const mainFeaturedPost = {
  title: 'Welcome to my personal website',
  //title:'',
  description:
    "I am a professional software engineer and a passionate data scientist with a decent experience in research and development.",
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
  description:about_description,
  archives: [
    { title: '...', url: '#' },
  ],
  social: [
    { name: 'Email', icon: EmailIcon,link:"mailto:hussam.turjman@gmail.com" },
    { name: 'GitHub', icon: GitHubIcon,link:"https://github.com/Hussam-Turjman" },
    { name: 'LinkedIn', icon: LinkedInIcon,link:"https://www.linkedin.com/in/mohammed-hussam-al-turjman-36ab761ab/" },
  
  ],
};


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Container maxWidth="lg">
    
       
       <Header title={main_title} sections={sections} />
      
        
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
        title={footer_title}
        description={footer_description}
      />
    </ThemeProvider>
  );
}

