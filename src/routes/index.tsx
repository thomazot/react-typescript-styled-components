import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { HomePage } from '../pages'

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

        </Switch>
    </Router>
)

export default Routes
