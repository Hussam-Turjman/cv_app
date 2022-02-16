import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import post1 from './posts/post_1';


export const main_title = "";
export const footer_title = "";
export const footer_description = "";
export const about_description = 'My name is Hussam Turjman and I am a professional software engineer based in Bremen, Germany. I am interested in developing intelligent and efficient machine learning models.';

export const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'CV', url: 'cv' },
  { title: 'Portfolio', url: 'portfolio' },
  { title: 'Service', url: 'service' },
];

export const mainFeaturedPost = {
  title: 'Welcome to my personal website',
  //title:'',
  description:
    "I am a professional software engineer and a passionate data scientist with a decent experience in research and development.",
  image: 'https://wallpapercave.com/wp/wp4533125.jpg',
  imageText: 'main image description',
  linkText: '',
};

export const featuredPosts = [
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

export const posts = [post1];

export const sidebar = {
  title: 'About',
  description: about_description,
  archives: [
    { title: '...', url: '#' },
  ],
  social: [
    { name: 'Email', icon: EmailIcon, link: "mailto:hussam.turjman@gmail.com" },
    { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/Hussam-Turjman" },
    { name: 'LinkedIn', icon: LinkedInIcon, link: "https://www.linkedin.com/in/mohammed-hussam-al-turjman-36ab761ab/" },

  ],
};


