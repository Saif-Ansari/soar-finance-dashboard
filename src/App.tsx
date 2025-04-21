import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';

import MainLayout from './components/layout/Layout';
import './styles/tailwind.output.css';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/Settings';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<h3>dsadas</h3> } />
            <Route path="/dashboard" element={<Dashboard /> } />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;