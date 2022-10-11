import React from 'react';


const Option = ({ option, notify }) => {


    return (
        <div>
            <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={option}>
                <input onClick={() => notify(option)} id={option}
                    type="radio"
                    value='a'
                    name="preferences" />
                <div className='ml-2'>
                    <h4 className="">{option}</h4>
                </div>
            </label>
        </div>
    );
};

export default Option;