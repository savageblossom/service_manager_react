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
    const [logged, setLogged] = useState(false);

    // Check localStorage upon mounting
    useEffect(() => setLogged(!!localStorage.getItem('logged')), [])

    // Conditional rendering
    if(!logged) return <LoginForm setLogged={ setLogged } />
    
    else {
        return (
            <>
                <Header />
                <GetStarted />
                <Stats />
                <Services />
                <Testimonials />
                <OurTeam />
                <ContactUs />
                <Footer />
            </>
        )
    }
}

export default App;