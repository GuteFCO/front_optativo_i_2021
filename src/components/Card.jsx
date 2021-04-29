import React from 'react';

const Card = ({ title, children }) => (
    <section id="card">
        <header>
            <h3>{title}</h3>
        </header>
        {children}
    </section>
);

/*
function Card({) {
    return (
        <section id="card">
            <header>
                <h3>{title}</h3>
            </header>
            {children}
        </section>
    );
}
*/

export default Card;
