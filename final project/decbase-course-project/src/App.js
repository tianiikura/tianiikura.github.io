
import './assets/scss/styles.scss';
import Header from './components/Header';
import HeroPage from './components/HeroPage';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUs';
import CompletedWorks from './components/CompletedWorks';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import services from './assets/database/WhatWeDo.json';

function App() {
  return (
      <div>
          <Header />
          <HeroPage />
          <WhatWeDo />
          <AboutUs />
          <CompletedWorks />
          <Testimonials />
          <Blog />
          <SignUp />
          <Footer />
      </div>
  );
}

export default App;
