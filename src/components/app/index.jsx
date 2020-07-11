import React, { Fragment } from 'react';

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

export default App;