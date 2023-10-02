import React from 'react';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route index element={<HomePage />} />
          <Route path="/:slug" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
