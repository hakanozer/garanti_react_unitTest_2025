import React from 'react';
import ReactDOM from 'react-dom/client';

// import pages
import Login from './pages/users/Login';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Login />);
