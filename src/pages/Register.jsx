import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import RegisterForm from '../containers/RegisterForm';


const registerLinks = [
    {href: '/', label: 'Ingresar'},
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Register() {
    return (
        <>
            <Navbar links={registerLinks} />
            <section>
                <Card title="Registrarse">
                    <RegisterForm />
                </Card>
            </section>
        </>
    );
}

export default Register;
