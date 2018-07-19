import React from 'react';
import './App.css';
import Header from './components/Header';
import QuoteAnimation from './components/QuoteAnimation';
import IpsumForm from './components/IpsumForm';

const App = () => (
  <div className="app">
    <Header />
    <QuoteAnimation />
    <IpsumForm />
  </div>
);
export default App;
