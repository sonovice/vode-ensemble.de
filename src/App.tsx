import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Main from './pages/Main';
import Layout from './components/Layout';
import Impressum from './pages/Impressum';
import { I18nProvider } from './i18n';

const App: Component = () => {
  return (
    <I18nProvider>
      <Router base={import.meta.env.BASE_URL}>
        <Route path="/" component={() => <Layout><Main /></Layout>} />
        <Route path="/impressum" component={() => <Layout><Impressum /></Layout>} />
      </Router>
    </I18nProvider>
  );
};

export default App;
