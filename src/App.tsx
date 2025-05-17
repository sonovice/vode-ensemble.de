import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Main from './pages/Main';
import Layout from './components/Layout';
import Impressum from './pages/Impressum';

const App: Component = () => {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Route path="/" component={() => <Layout><Main /></Layout>} />
      <Route path="/impressum" component={() => <Layout><Impressum /></Layout>} />
    </Router>
  );
};

export default App;
