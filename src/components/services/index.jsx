import React, { useEffect } from 'react';

import ControlledAccordions from './Accordion';

const Services = () => {
    return (
        <section className="services container">
            <h1 className="services__heading">Services</h1>
            <p className="services__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br />
                    incididunt ut labore et dheaolore magna</p>
            <ControlledAccordions />
        </section>
    )
}

export default Services;