import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer';
import Main from './components/Main'

const App = () => {
  return (
    <div id="container">
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
};

export default App;