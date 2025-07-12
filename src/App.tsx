import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard';
import Browse from './pages/Browse';
import AddItem from './pages/AddItem';
import ItemDetail from './pages/ItemDetail';
import AdminDashboard from './pages/Admin/AdminDashboard';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/browse" element={
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        } />
        
        <Route path="/add-item" element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>
        } />
        
        <Route path="/item/:id" element={
          <ProtectedRoute>
            <ItemDetail />
          </ProtectedRoute>
        } />
        
        <Route path="/admin" element={
          <ProtectedRoute adminOnly>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;