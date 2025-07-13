import React, { useState } from 'react';
import { Activity, FileText, Users, Shield, Upload, Calendar, User, Heart, Brain, Stethoscope } from 'lucide-react';
import HomePage from './components/HomePage';
import ReportAnalyzer from './components/ReportAnalyzer';
import Navigation from './components/Navigation';

type Page = 'home' | 'analyzer';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage onNavigateToAnalyzer={() => setCurrentPage('analyzer')} />}
      {currentPage === 'analyzer' && <ReportAnalyzer />}
    </div>
  );
}

export default App;