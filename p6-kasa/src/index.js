import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home';
import APropos from './pages/A propos';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<APropos />} />
                <Route path='*' element={<Error />} />
                <Route path='/logement/:id' element={<Logement />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);