import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/layout/Home'
import signup from './components/user/signup'
import signin from './components/user/signin'
import editTodo from './components/todo/editTodo'
import addTodo from './components/todo/addTodo'

class App extends Component {
  render() {
    return (
      < BrowserRouter >
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={this.props.isLoggedIn ? Dashboard : Home} />
            <Route path='/signup' component={signup} />
            <Route path='/signin' component={signin} />
            <Route path='/edit/:todoId' component={editTodo} />
            <Route path='/addTodo' component={addTodo} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

