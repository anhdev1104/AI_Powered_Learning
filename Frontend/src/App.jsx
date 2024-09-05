import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/router';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const footerSlideWrap = document.querySelector('.footer-slide__wrap');
    const homeBox = document.querySelector('.home__box');
    const homeBox1 = document.querySelector('.home__box1');
    const homeBox2 = document.querySelector('.home__box2');

    if (footerSlideWrap) {
      let copy1 = footerSlideWrap.cloneNode(true);
      document.querySelector('.footer-slide')?.appendChild(copy1);
    }

    if (homeBox) {
      let copy2 = homeBox.cloneNode(true);
      document.querySelector('.home__slide')?.appendChild(copy2);
    }

    if (homeBox1) {
      let copy3 = homeBox1.cloneNode(true);
      document.querySelector('.home__slide1')?.appendChild(copy3);
    }

    if (homeBox2) {
      let copy4 = homeBox2.cloneNode(true);
      document.querySelector('.home__slide2')?.appendChild(copy4);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
