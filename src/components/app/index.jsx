import React, { useEffect, useState, Fragment } from 'react';

// import login form component
import LoginForm from '../login_form';

// import main components
import Header from '../header';
import GetStarted from '../get_started';
import Stats from '../stats';
import Services from '../services';
import Testimonials from '../testimonials';
import OurTeam from '../our_team';
import ContactUs from '../contact_us';
import Footer from '../footer';

const App = () => {
    const [logged, setLogged] = useState('');

    // Callback func for getting logged value from children component
    const getLoginInfo = (isLogged) => {
        setLogged(isLogged);
        console.log(logged)
    }

    // Check localStorage upon mounting
    useEffect(() => {
        if(localStorage.getItem('logged') === 'true') setLogged('true')
        else setLogged('false')
    })

    // Conditional rendering
    if(logged === 'false') {
        return <LoginForm isLogged={ getLoginInfo } />
    }
    else {
        return (
            <Fragment>
                <Header />
                <GetStarted />
                <Stats />
                <Services />
                <Testimonials />
                <OurTeam />
                <ContactUs />
                <Footer />
            </Fragment>
        )
    }
}

export default App;