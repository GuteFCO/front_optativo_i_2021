import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import LoginForm from '../containers/LoginForm';


const loginLinks = [
    {href: '/register', label: 'Registrarse'},
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Login() {
    return (
        <>
            <Navbar links={loginLinks} />
            <section>
                <Card title="Ingreso">
                    <LoginForm />
                </Card>
            </section>
        </>
    );
}

export default Login;
