import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer, Zoom } from 'react-toastify';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import ErrorBondary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component  {
  render() {
    return (
      <div className="container">
        <>
          <ToastContainer draggable={false} transition={Zoom} autoClose={3000} position={'top-center'} />
        </>
        <Header/>
        <ErrorBondary>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error} />
          </Switch>
        </ErrorBondary>
        <Footer/>
      </div>
    );
  }
}

export default App;
