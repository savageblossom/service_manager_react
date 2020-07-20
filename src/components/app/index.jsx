import React, { useEffect, useContext } from 'react';

// components to render form component
import LoginForm from '../../pages/LoginForm';
import MainPage from '../../pages/MainPage';
import NotFound from '../../pages/NotFound';

import { ProtectedRoute } from '../../routes/ProtectedRoute';

// store context
import {AuthStoreContext} from '../../index';
import {UIStoreContext} from '../../index';

// mobx observer
import {observer} from 'mobx-react';

// router
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const App = observer(() => {
    const authStore = useContext(AuthStoreContext);
    const {setMobileView, isMobileView} = useContext(UIStoreContext);
    useEffect(() => {
        localStorage.getItem("auth") === null && localStorage.setItem("auth", "false");
        
        window.addEventListener('resize', () => {
            setMobileView()
        })
    })

    return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginForm} />
                    <ProtectedRoute exact path="/home" component={MainPage} />
                    <Route exact path="/">
                        {
                            !authStore.auth 
                            ? <Redirect to="/login" />
                            : <Redirect to="/home" />
                        }
                    </Route>
                    <Route path="*"> 
                        {
                            !authStore.auth 
                            ? <Redirect to="/login" />
                            : <NotFound />
                        }
                    </Route>
                </Switch>
            </Router>
    )
})

export default App;