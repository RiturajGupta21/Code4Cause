import { BrowserRouter } from "react-router-dom";

import { About, Timeline, Brief, Hero, Navbar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Timeline />
        <Brief />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
