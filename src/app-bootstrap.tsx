import App from '@/App/App';
import { store } from '@/state/store';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { registerSW } from 'virtual:pwa-register';

registerSW();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector('#root'),
);
