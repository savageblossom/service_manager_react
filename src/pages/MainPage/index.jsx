import React from 'react';

import Header from '../../components/header';
import GetStarted from '../../components/get_started';
import Stats from '../../components/stats';
import Services from '../../components/services';
import Testimonials from '../../components/testimonials';
import OurTeam from '../../components/our_team';
import ContactUs from '../../components/contact_us';
import Footer from '../../components/footer';

export default function MainPage() {
    return (
            <>
                {/* <Header />
                <GetStarted />
                <Stats /> */}
                <Services />
                {/* <Testimonials />
                <OurTeam />
                <ContactUs />
                <Footer /> */}
            </>
    )
}