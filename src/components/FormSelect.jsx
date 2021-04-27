import React from 'react';
import FormLine from './FormLine';

function FormSelect(props) {
    return (
        <FormLine label={props.label}>
            <select multiple className="fullWidth bigger" required>
                {
                    props.options.map((option, key) => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </FormLine>
    );
}

export default FormSelect;
