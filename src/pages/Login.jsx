import React from 'react';
import FormLayout from '../layouts/FormLayout';
import LoginForm from '../containers/LoginForm';


const loginLinks = [
    {href: '/register', label: 'Registrarse'},
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Login({ history }) {
    return (
        <FormLayout
            links={loginLinks}
            title="Ingreso"
            Component={LoginForm}
            history={history}
        />
    );
}

export default Login;
