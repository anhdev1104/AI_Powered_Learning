<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> a3c28d8fe8b9f2933ceccff407450ca93974b740
