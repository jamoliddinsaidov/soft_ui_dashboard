import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import Dashboard from './pages/Dashboard/Dashboard'

// styles
import { GlobalStyles, StyledApp } from './GlobalStyles'

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </StyledApp>
  )
}

export default App
