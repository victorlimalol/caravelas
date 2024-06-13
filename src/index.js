import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import SeeMore from './pages/seemore';
import LoginPage from './pages/login';
import AdminHome from './pages/admin-home';
import NewEstablishment from './pages/new-establishment';
import EditEstablishment from './pages/edit-estabilishment';
import SchedulingPage from './pages/admin-scheduling';
import NewSchedule from './pages/new-schedule';
import EditSchedule from './pages/edit-schedule';
import ContactsPage from './pages/admin-contacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
