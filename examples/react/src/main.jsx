import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import UsersPage from './pages/users';
import IntegrationsPage from './pages/integrations';
import DashboardPage from './pages/dashboard';
import Users from './pages/Users';
import Root from './Root';
import ProtectedRoute from './protectedRoutes';
import { AuthContextProvider } from './context/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Root />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
