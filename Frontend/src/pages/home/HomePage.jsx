import Banner from './components/Banner';
import Dev from './components/Dev';
import Feedback from './components/Feedback';
import Intro from './components/Intro';

const HomePage = () => {
  return (
    <main>
      <Banner />
      <Intro />
      <Feedback />
      <Dev />
    </main>
  );
};

export default HomePage;
