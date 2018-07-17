import React from 'react';
import './App.css';
import Header from './components/Header';
import QuoteAnimation from './components/QuoteAnimation';
import Footer from './components/Footer';
import IpsumForm from './components/IpsumForm';

const App = () => (
  <div className="app">
    <Header />
    <QuoteAnimation />
    <IpsumForm />
    <Footer />
  </div>
);
export default App;
