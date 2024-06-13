import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/seemore/:id" element={<SeeMore />} />
        <Route path="/admin/search" element={<AdminHome />} />
        <Route path="/admin/schedule" element={<SchedulingPage />} />
        <Route path="/admin/contacts" element={<ContactsPage />} />
        <Route path="/admin/new-estabilishment" element={<NewEstablishment />} />
        <Route path="/admin/edit-estabilishment" element={<EditEstablishment />} />
        <Route path="/admin/new-schedule" element={<NewSchedule />} />
        <Route path="/admin/edit-schedule" element={<EditSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
