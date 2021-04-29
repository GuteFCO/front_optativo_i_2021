import React from 'react';
import FormLine from './FormLine';

function FormTextarea({ label }) {
    return (
        <FormLine label={label}>
            <textarea
                className="fullWidth bigger"
                rows="5"
                required>
            </textarea>
        </FormLine>
    );
}

export default FormTextarea;
