import '@/assets/styles/main.css';
import { useWeb3 } from '@/state/web3';
import 'normalize.css';
import { FC } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useAppMessagesDisplay } from './hooks';
import { Routes } from './routes';

const App: FC = () => {
  useWeb3();
  useAppMessagesDisplay();

  return (
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  );
};

export default App;
