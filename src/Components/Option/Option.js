import React from 'react';

const Option = ({ option }) => {
    return (
        <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={option}>
            <input id={option}
                type="radio"
                value='a'
                name="preferences" />
            <div className='ml-2'>
                <h4 className="">{option}</h4>
            </div>
        </label>
    );
};

export default Option;