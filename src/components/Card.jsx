import React from 'react';


function Card(props) {
    return (
        <section id="card">
            <header>
                <h3>{props.title}</h3>
            </header>
            {props.children}
        </section>
    );
}

export default Card;
