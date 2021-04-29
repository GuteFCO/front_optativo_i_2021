import React from 'react';
import FormLine from './FormLine';

function FormInput({ label, type, placeholder }) {
    return (
        <FormLine label={label}>
            <input
                type={type}
                placeholder={placeholder}
                className="fullWidth bigger" />
        </FormLine>
    );
}

export default FormInput;
