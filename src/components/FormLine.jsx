import React from 'react';


function FormLine({ label, children }) {
    return (
        <div>
            <label>{label}</label>
            {children}
        </div>
    );
}

export default FormLine;
