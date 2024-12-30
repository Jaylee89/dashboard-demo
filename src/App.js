import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Container maxWidth="sm">
              <Typography variant="h2" component="h1" gutterBottom>
                欢迎使用React
              </Typography>
              <Button variant="contained" color="primary" href="/login">
                登录
              </Button>
            </Container>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
