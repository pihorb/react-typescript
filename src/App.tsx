import React from 'react'
import { NavBar } from './components/Nav-bar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AboutPage} from './pages/About-page'
import {TodoPage} from './pages/Todo-page'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path='/' exact/>
          <Route component={AboutPage} path='/about'/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
