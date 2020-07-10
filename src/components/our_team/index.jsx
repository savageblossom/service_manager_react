import React from 'react';

const OurTeam = () => {
    return (
        <section className="our_team container">
            <h1 className="our_team__heading">Our Team</h1>
            <p className="our_team__caption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <ul className="our_team__member_list">
                <li className="our_team__member_item">
                    <div className="our_team__member_portrait">
                        <img src="img/our_team__portraits.png" alt="" />
                    </div>
                    <div className="our_team__member_text-block">
                        <h1 className="our_team__member_name">Sophie Turner</h1>
                        <p className="our_team__member_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="our_team__member_socials">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-steam"></i></a>
                        <a href="#"><i className="fab fa-vk"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default OurTeam;