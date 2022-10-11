import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ value, quiz }) => {
    // console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    const [show, setShow] = useState(false)

    //event handler for showing right answer
    const showAnswer = () => {
        setShow(!show)
    }

    //event handler for quiz answer
    const notify = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct answer!!!😀', { autoClose: 1000 })
        }
        else {
            toast.error('Incorrect Answer!!!☹️', { autoClose: 1000 })
        }
    };
    return (
        <div className="px-10 py-10 shadow-lg text-center border rounded-md lg:px-5 lg:py-10 xl:py-10">
            <div className='flex justify-between'>
                <h3 className="w-4/5 mx-auto mb-2 font-bold text-gray-700">
                    Quiz {value} : {question}
                </h3>
                <EyeIcon onClick={showAnswer} className="h-8 w-1/5 text-green-500" />
            </div>
            <form action="">
                {
                    options.map((option, idx) => <Option key={idx} option={option} notify={notify}></Option>)
                }
                {/* <ToastContainer /> */}
            </form>
            {
                show &&
                <div className='bg-green-500 mt-3 rounded-md p-3 text-black font-bold'>
                    <p>Correct answer: <br />
                        <span className='text-white'>{correctAnswer}</span></p>
                </div>
            }
        </div>
    );
};

export default Quiz;