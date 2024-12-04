import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './profile/Login';
import Home from './home/Home';
import Cadastro from './profile/Cadastro';
import Create from './Admin/Create';
import Edit from './Admin/Edit';
import Show from './Admin/Show';
import CadastroAdmin from './Admin/CadastroAdmin';
import Dashboard from './Dashboard/Dashboard';
import Resgate from './resgate-objeto/Resgate';
import Página404 from './Erro/Página404';
import DashboardAdmin from './Admin/DashboardAdmin';
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
        <Route path="*" element={<Página404 />} />
        <Route path="/resgate" element={<Resgate />} />
        <Route path="/admin" element={<CadastroAdmin />} />
        <Route path="/dashboardadm" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();