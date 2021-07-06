import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';


function FormLayout({ links, title, Component, history}) {
    return (
        <>
            <Navbar links={links} />
            <section>
                <Card title={title}>
                    <Component history={history} />
                </Card>
            </section>
        </>
    );
}

export default FormLayout;
