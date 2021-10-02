import React, { Fragment, Component, ReactNode } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import { Provider } from 'react-redux'
import { store } from './store'

import './App.css';
import NavBar from "./module/navigation/component/NavBar"
import NewAccountForm from "./module/bank/account/component/NewAccountForm"
import UserAccountInfo from "./module/bank/account/component/UserAccountInfo"
import NotFound from "./module/notfound/component/NotFound"
import WithdrawalForm from "./module/bank/transaction/component/WidthdrawForm"
import DepositForm from "./module/bank/transaction/component/DepositForm"
import TransactionHistory from "./module/bank/transaction/component/TransactionHistory"
import LoginForm from "./module/auth/component/LoginForm"
import ProtectedRoutes from "./module/auth/component/protectedRoutes"
import auth from './module/auth/authService';


class App extends Component<any, any>{
  state = { user: null };

  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <Provider store={store} >
        <Fragment>
          <ToastContainer />
          <Router>
            <NavBar user={user} />
            <main className='container'>
              <Switch>
                <Route path='/login' component={LoginForm} />
                <Route path='/account/new' component={NewAccountForm} />
                <ProtectedRoutes path='/transaction/history' component={TransactionHistory} render />

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
}

export default App;
