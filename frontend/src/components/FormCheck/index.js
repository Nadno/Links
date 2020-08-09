import React, { useEffect, useState } from 'react';

const FormCheck = ({ data, name }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if (initialValue !== undefined) setIsChecked(initialValue);
    }, [name, data]);

    const handleChange = e => {
        if(isChecked === e.target.checked) return;
        setIsChecked(!!e.target.checked);
    };

    const inputProps = {
        type: 'checkbox',
        name,
        checked: !!isChecked,
        onChange: handleChange,
    };

    return (
        <div className="form-group form-check">
            <label className="form-check-label">
                <input { ...inputProps }/>
                <span className="form-check-sign"></span>
                Is Social
            </label>
        </div>
    );
};

export default FormCheck;