import React from 'react';

const Stats = () => {
    return (
        <section className="stats">
            <ul className="stats__list">
                <li className="stats__item stats__item--business">
                    <div className="stats__item_icon">
                        <i className="far fa-building"></i>
                    </div>
                    <p className="stats__item_text">
                        <span className="stats__number">12000+</span><br/>
                        <span className="stats__type">Business</span>
                    </p>
                </li>
                <li className="stats__item stats__item--downloads">
                    <div className="stats__item_icon">
                        <i className="fas fa-download"></i>
                    </div>
                    <p className="stats__item_text">
                        <span className="stats__number">60000+</span><br/>
                        <span className="stats__type">Downloads</span>
                    </p>
                </li>
                <li className="stats__item stats__item--installs">
                    <div className="stats__item_icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <p className="stats__item_text">
                        <span className="stats__number">300000+</span><br/>
                        <span className="stats__type">Free Installs</span>
                    </p>
                </li>
                <li className="stats__item stats__item--users">
                    <div className="stats__item_icon">
                        <i className="fas fa-download"></i>
                    </div>
                    <p className="stats__item_text">
                        <span className="stats__number">40000+</span><br/>
                        <span className="stats__type">Pro Users</span>
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Stats;