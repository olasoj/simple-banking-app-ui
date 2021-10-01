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
import WithdrawalForm from "./module/bank/transaction/component/WidthdrawForm"
import DepositForm from "./module/bank/transaction/component/DepositForm"
import TransactionHistory from "./module/bank/transaction/component/TransactionHistory"

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
              <Route path='/transaction/history' component={TransactionHistory} />
              <Route path='/account/info' render={(props) => <UserAccountInfo {...props} />} />
              <Route path='/transaction/deposit' component={DepositForm} />
              <Route path='/transaction/withdraw' component={WithdrawalForm} />
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
