import ReactDOM from 'react-dom';
import HomePage from './home/Home';
import CVPage from './cv/CV';
import PortfolioPage from './portfolio/Portfolio';
import AboutPage from './about/About';
import ServicePage from './service/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterPathEnum } from './RouterPathEnum'

ReactDOM.render(
  <BrowserRouter>
   <Routes>
 
   <Route path={RouterPathEnum.HOME} element={<HomePage  />}>
     
   </Route>
   <Route path={RouterPathEnum.ABOUT} element={<AboutPage  />}>
     
     </Route>
     <Route path={RouterPathEnum.PORTFOLIO} element={<PortfolioPage  />}>
     
     </Route>
     <Route path={RouterPathEnum.CV} element={<CVPage  />}>
     
     </Route>
     <Route path={RouterPathEnum.SERVICE} element={<ServicePage  />}>
     
     </Route>

  </Routes>
  </BrowserRouter>,
  document.querySelector('#root'),
);
