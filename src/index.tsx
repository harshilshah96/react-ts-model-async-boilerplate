import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';

const Home = React.lazy(() => import('./components/Home'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
