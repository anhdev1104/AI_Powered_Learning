import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const LayoutAI = () => {
  return (
    <>
      <Header />
      <main className="mt-10">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutAI;
