import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';


const registerLinks = ['Ingresar', 'Acerca de', 'Contacto'];
const browserOptions = [
    {value: "", label: "Seleccione sus navegadores favoritos"},
    {value: "firefox", label: "Mozilla Firefox"},
    {value: "chrome", label: "Google Chrome"},
    {value: "edge", label: "Microsoft Edge"},
    {value: "safari", label: "Safari"},
    {value: "opera", label: "Opera"},
];


function Register() {
    return (
        <>
            <Navbar links={registerLinks} />
            <section>
                <Card title="Registrarse">
                    <form id="datos_usuario">
                        <FormInput label="Nombre y Apellido" />
                        <FormInput
                            label="Correo"
                            placeholder="Su direcci&oacute;n de correo"
                            type="email"
                        />
                        <FormInput
                            label="Contrase&ntilde;a"
                            type="password"
                        />
                        <FormInput
                            label="Confirmaci&oacute;n de contrase&ntilde;a"
                            type="password"
                        />

                        <FormSelect
                            label="Navegadores preferidos"
                            options={browserOptions}
                        />

                        <div>
                            <label>Informaci&oacute;n adicional</label>
                            <textarea className="fullWidth bigger" rows="5" required></textarea>
                        </div>

                        <div>
                            <label>Curso actual</label>
                            <input type="text" list="cursos" className="fullWidth bigger" required />
                            <datalist id="cursos">
                                <option>Optativo 1</option>
                                <option>Bases de datos</option>
                                <option>Cálculo</option>
                            </datalist>
                        </div>

                        <div>
                            <label>Fecha actual</label>
                            <output className="fullWidth bigger">14/04/2021</output>
                        </div>

                        <div className="centered">
                            <input type="submit" value="Registrarse" />
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
}

export default Register;
