import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import editTodo from './components/todo/editTodo'
import addTodo from './components/todo/addTodo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/edit/:todoId' component={editTodo} />
            <Route path='/addTodo' component={addTodo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

