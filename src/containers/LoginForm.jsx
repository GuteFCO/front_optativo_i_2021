import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import FormInput from '../components/FormInput';


function LoginForm({ history }) {
    /*
    const emailArray = useState('');

    const email = emailArray[0];
    const setEmail = emailArray[1];
    */

    //const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmitClick = (event) => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        }).then(response => {
            if (response.ok) {
                return response.text()
            }
            throw new Error('Usuario y/o contraseña incorrectos');
        }).then(token => {
            localStorage.setItem('token', token);
            history.push('/pedidos');
        }).catch(err => {
            alert(err);
        });

        event.preventDefault();
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

    componentDidMount() {

    }

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
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <FormInput
                    label="Contrase&ntilde;a"
                    type="password"
                    value={this.state.password}
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
