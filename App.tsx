
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AccessibilityProvider } from './components/Accessibility';

// Pages
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { Auth } from './pages/Auth';
import { Plans } from './pages/Plans';
import { VideoClass } from './pages/VideoClass';
import { News } from './pages/News';
import { NewsArticle } from './pages/NewsArticle';
import { Contact } from './pages/Contact';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/video-aula" element={<VideoClass />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsArticle />} />
            <Route path="/novidades" element={<News />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Auth />} />
            <Route path="/cadastro" element={<Auth />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
