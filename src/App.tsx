import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Main from './pages/Main';
import Layout from './components/Layout';
import Impressum from './pages/Impressum';
import Academy2025 from './pages/Academy2025';
import Adventskalender from './pages/Adventskalender';
import { I18nProvider } from './i18n';

const App: Component = () => {
  return (
    <I18nProvider>
      <Router base={import.meta.env.BASE_URL}>
        <Route path="/" component={() => <Layout><Main /></Layout>} />
        <Route path="/impressum" component={() => <Layout><Impressum /></Layout>} />
        <Route path="/academy" component={() => <Layout><Academy2025 /></Layout>} />
        <Route path="/academy-2025" component={() => <Layout><Academy2025 /></Layout>} />
        <Route path="/adventskalender" component={() => <Layout><Adventskalender /></Layout>} />
        <Route path="*" component={() => <Layout><Main /></Layout>} />
      </Router>
    </I18nProvider>
  );
};

export default App;
