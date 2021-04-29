import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FormInput from '../components/FormInput';


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
                    <form>
                        <FormInput
                            label="Correo"
                            placeholder="Su direcci&oacute;n de correo"
                            type="email"
                        />
                        <FormInput
                            label="Contrase&ntilde;a"
                            type="password"
                        />

                        <div className="centered">
                            <input type="submit" value="Ingresar" />
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
}

export default Login;
