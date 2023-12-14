import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import MoodProvider from './context/MoodContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MoodProvider>
      <App />
    </MoodProvider>
  </BrowserRouter>
);
