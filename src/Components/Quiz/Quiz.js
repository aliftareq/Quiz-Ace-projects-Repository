import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Quiz = ({ value, quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    return (
        <div className="px-10 py-10 text-center border rounded lg:px-5 lg:py-10 xl:py-10">
            <div className='flex justify-between'>
                <h3 className="w-4/5 mx-auto mb-2 font-bold text-gray-700">
                    Quiz {value} : {question}
                </h3>
                <EyeIcon className="h-8 w-1/5 text-green-500" />
            </div>

            <form action="">
                {
                    options.map(option => <Option option={option}></Option>)
                }
            </form>
        </div>
    );
};

export default Quiz;