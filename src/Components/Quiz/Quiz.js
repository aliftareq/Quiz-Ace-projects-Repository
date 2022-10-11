import React from 'react';

const Quiz = ({ value, quiz }) => {
    console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    const [op1, op2, op3, op4] = options;
    return (
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <h3 className="max-w-xs mx-auto mb-2 font-bold text-gray-700">
                Quiz {value} : {question}
            </h3>
            <form action="">
                {
                    <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={op1}>
                        <input id={op1}
                            type="radio"
                            value='a'
                            name="preferences" />
                        <div className='ml-2'>
                            <h4 className="">{op1}</h4>
                        </div>
                    </label>
                }
                {
                    <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={op2}>
                        <input id={op2}
                            type="radio"
                            value='a'
                            name="preferences" />
                        <div className='ml-2'>
                            <h4 className="">{op2}</h4>
                        </div>
                    </label>
                }
                {
                    <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={op3}>
                        <input id={op3}
                            type="radio"
                            value='a'
                            name="preferences" />
                        <div className='ml-2'>
                            <h4 className="">{op3}</h4>
                        </div>
                    </label>
                }
                {
                    <label className="flex border-2 border-gray-500 p-2 rounded-md mt-2" htmlFor={op4}>
                        <input id={op4}
                            type="radio"
                            value='a'
                            name="preferences" />
                        <div className='ml-2'>
                            <h4 className="">{op4}</h4>
                        </div>
                    </label>
                }
            </form>
        </div>
    );
};

export default Quiz;