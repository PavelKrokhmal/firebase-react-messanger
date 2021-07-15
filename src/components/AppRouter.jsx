import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes, privateRoutes} from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

function AppRouter() {
    const user = false
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter