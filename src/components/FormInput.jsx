import React from 'react';
import FormLine from './FormLine';


function FormInput({ label, type, placeholder, onChange, value }) {
    return (
        <FormLine label={label}>
            <input
                type={type}
                placeholder={placeholder}
                className="fullWidth bigger"
                onChange={onChange}
                value={value} />
        </FormLine>
    );
}

export default FormInput;
