import React from 'react';
import FormLayout from '../layouts/FormLayout';
import RegisterForm from '../containers/RegisterForm';


const registerLinks = [
    {href: '/', label: 'Ingresar'},
    {href: '/about', label: 'Acerca de'},
    {href: '/contact', label: 'Contacto'}
];


function Register() {
    return (
        <FormLayout
            links={registerLinks}
            title="Registrarse"
            Component={RegisterForm}
        />
    );
}

export default Register;
