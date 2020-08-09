import React, { useState, useEffect } from 'react';

const FormGroup = props => {
    const { data, name, label, type } = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if(initialValue !== undefined) setValue(initialValue);
    }, [name, data]);

    const handleChange = e => {
        if(value === e.target.value) return;

        setValue(e.target.value);
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                className="form-control"
                onChange={handleChange} 
                type={type} 
                name={name} 
                value={value} 
            />
        </div>
    );
};

export default FormGroup;