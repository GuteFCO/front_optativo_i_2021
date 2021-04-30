import React from 'react';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormTextarea from '../components/FormTextarea';
import FormDatalist from '../components/FormDatalist';
import FormOutput from '../components/FormOutput';


const browserOptions = [
    {value: "firefox", label: "Mozilla Firefox"},
    {value: "chrome", label: "Google Chrome"},
    {value: "edge", label: "Microsoft Edge"},
    {value: "safari", label: "Safari"},
    {value: "opera", label: "Opera"},
];
const cursoOptions = [
    "Optativo 1",
    "Bases de datos",
    "Cálculo"
];


function RegisterForm() {
    return (
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
                placeholder="Seleccione sus navegadores favoritos"
                label="Navegadores preferidos"
                options={browserOptions}
            />

            <FormTextarea
                label="Informaci&oacute;n adicional"
            />

            <FormDatalist
                idList="cursos"
                label="Curso actual"
                options={cursoOptions}
            />

            <FormOutput
                value={new Date().toLocaleDateString()}
            />

            <div className="centered">
                <input type="submit" value="Registrarse" />
            </div>
        </form>
    );
}

export default RegisterForm;
