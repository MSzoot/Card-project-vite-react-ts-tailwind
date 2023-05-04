import Img from './img';
import Info from './info';
import '@fontsource/inter';
import About from './about';
import Footer from './footer';

const App = () => {
  return (
    <div className="font- mx-auto my-8 w-[317px] rounded-2xl bg-[#1A1B21]">
      <Img />
      <Info />
      <About />
      <Footer />
    </div>
  );
};

export default App;
