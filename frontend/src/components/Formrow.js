import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
    const p = `Enter ${name}`;
    return (

        // <div className='form-row'>
        //     <label htmlFor={name} className='form-label'>
        //         {labelText || name}
        //     </label>
        //     <input
        //         id={name}
        //         type={type}
        //         name={name}
        //         value={value}
        //         onChange={handleChange}
        //         className='form-input'
        //     />
        // </div>

        // <div className="col-span-6 sm:col-span-3">
        //     <label
        //         htmlFor={name}
        //         className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        //     >
        //         {labelText || name}
        //     </label>

        //     <input
        //         type={type}
        //         id={name}
        //         name={name}
        //         className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        //         value={value}
        //         onChange={handleChange}
        //     />
        // </div>

        <div>
            <label htmlFor={name} className="sr-only">{labelText || name}</label>

            <div className="relative">
                <input
                    type={type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={p}
                />
            </div>
        </div>

    );
};

export default FormRow;