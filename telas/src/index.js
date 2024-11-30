import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './profile/Login';
import Home from './home/Home';
import Cadastro from './profile/Cadastro';
import Create from './Crud/Create';
import Edit from './Crud/Edit';
import Show from './Crud/Show';
import Dashboard from './Dashboard/Dashboard';
import Página404 from './Erro/Página404';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/show" element={<Show />} />
        <Route path="/not-found" element={<Página404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();