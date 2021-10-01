import React, { Fragment, Component } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Route, Switch, Redirect, } from "react-router-dom"

import { Provider } from 'react-redux'
import { store } from './store'

import logo from './logo.svg';
import './App.css';
import NavBar from "./module/navigation/component/NavBar"
import NewAccountForm from "./module/bank/account/component/NewAccountForm"
import UserAccountInfo from "./module/bank/account/component/UserAccountInfo"
import NotFound from "./module/notfound/component/NotFound"

function App() {
  return (
    <Provider store={store} >
      <Fragment>
        <ToastContainer />
        <Router>
          <NavBar />
          <main className='container'>
            <Switch>
              <Route path='/users/add' component={NewAccountForm} />
              <Route path='/account/info' render={(props) => <UserAccountInfo {...props} />} />
              <Redirect exact from='/' to='/users' />
              <Route path='/not-found' component={NotFound} />
              <Redirect to='/not-found' />
            </Switch>
          </main>
        </Router>
      </Fragment>

    </Provider>
  );
}

export default App;
