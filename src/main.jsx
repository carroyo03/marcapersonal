import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const App = lazy(() => import('./App.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalErrorHandler = ({ children }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
};


root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalErrorHandler>
        <App />
      </GlobalErrorHandler>
    </Suspense>
  </React.StrictMode>
);