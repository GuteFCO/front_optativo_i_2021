import React from 'react';
import FormLine from './FormLine';

function FormOutput({ label, value }) {
    return (
        <FormLine label={label}>
            <output className="fullWidth bigger">
                {value}
            </output>
        </FormLine>
    );
}

export default FormOutput;
