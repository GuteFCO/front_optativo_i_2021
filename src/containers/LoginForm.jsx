import React, { useState } from 'react';
import FormInput from '../components/FormInput';


function LoginForm() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmitClick = (event) => {
        console.log("Valores actuales", {
            email,
            password
        });
    }

    return (
        <form>
            <FormInput
                label="Correo"
                placeholder="Su direcci&oacute;n de correo"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <FormInput
                label="Contrase&ntilde;a"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <div className="centered">
                <input
                    type="submit"
                    value="Ingresar"
                    onClick={handleSubmitClick} />
            </div>
        </form>
    );
}


/*
class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleEmailChange = (event) => {
        console.log("Email:", event.target.value);
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        console.log("Password:", event.target.value);
        this.setState({
            password: event.target.value
        });
    }

    handleSubmitClick = (event) => {
        console.log("Enviando", this.state);
    }

    render() {
        return (
            <form>
                <FormInput
                    label="Correo"
                    placeholder="Su direcci&oacute;n de correo"
                    type="email"
                    onChange={this.handleEmailChange}
                />
                <FormInput
                    label="Contrase&ntilde;a"
                    type="password"
                    onChange={this.handlePasswordChange}
                />

                <div className="centered">
                    <input
                        type="submit"
                        value="Ingresar"
                        onClick={this.handleSubmitClick} />
                </div>
            </form>
        );
    }
}
*/

/*function LoginForm() {
    return (
        <form>
            <FormInput
                label="Correo"
                placeholder="Su direcci&oacute;n de correo"
                type="email"
                onChange={handleEmailChange}
            />
            <FormInput
                label="Contrase&ntilde;a"
                type="password"
                onChange={handlePasswordChange}
            />

            <div className="centered">
                <input
                    type="submit"
                    value="Ingresar"
                    onClick={handleSubmitClick} />
            </div>
        </form>
    );
}*/

export default LoginForm;
