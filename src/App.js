import React from 'react';
import './global.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/index';

function App() {
  return (
    <>
    <Layout>
      <HomePage />
    </Layout>
    </>
  );
}

export default App;
