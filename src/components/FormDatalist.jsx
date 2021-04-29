import React from 'react';
import FormLine from './FormLine';

function FormDatalist({ label, idList, options }) {
    /*
    const label = props.label;
    const idList = props.idList;
    const options = props.options;
    */

    /*
    const { label, idList, options } = props;
    */

    return (
        <FormLine label={label}>
            <input type="text" list={idList} className="fullWidth bigger" required />
            <datalist id={idList}>
                {
                    options.map((option, key) => (
                        <option key={key}>{option}</option>
                    ))
                }
            </datalist>
        </FormLine>
    );
}

export default FormDatalist;
