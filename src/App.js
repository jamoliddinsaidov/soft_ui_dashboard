import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import Dashboard from './pages/Dashboard/Dashboard'
import Tables from './pages/Tables/Tables'
import Billing from './pages/Billing/Billing'

// styles
import { GlobalStyles, StyledApp } from './GlobalStyles'

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Switch>
        <Route path='/tables' component={Tables} />
        <Route path='/billing' component={Billing} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Redirect to='/dashboard' />
      </Switch>
    </StyledApp>
  )
}

export default App
