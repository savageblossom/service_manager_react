import React, { useEffect, useContext } from 'react';

// components to render form component
import LoginForm from '../../pages/LoginForm';
import MainPage from '../../pages/MainPage';
import NotFound from '../../pages/NotFound';

import { ProtectedRoute } from '../../routes/ProtectedRoute';

// store context
import {AuthStoreContext} from '../../index';

// mobx observer
import {observer} from 'mobx-react';

// router
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const App = observer(() => {
    const store = useContext(AuthStoreContext);
    useEffect(() => {
        localStorage.getItem("auth") === null && localStorage.setItem("auth", "false")
    })

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <ProtectedRoute exact path="/home" component={MainPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
})

export default App;