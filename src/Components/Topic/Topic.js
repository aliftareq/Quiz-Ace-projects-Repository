import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div className="overflow-hidden transition-shadow drop-shadow-lg bg-green-100 duration-300 rounded-xl">
            <div className='container rounded-xl p-5'>
                <a href="/" aria-label="Article">
                    <img
                        src={logo}
                        className="object-cover w-full h-full rounded"
                        alt=""
                    />
                </a>
            </div>
            <div className="py-5 border-2 bg-green-300">
                <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    <p className="text-4xl font-bold leading-5">{name}</p>
                </a>
                <div className=' lg:flex justify-between px-8 mt-6'>
                    <p className="mb-2 text-2xl font-semibold text-gray-600">
                        Total-Quiz : {total}
                    </p>
                    <button className='bg-sky-600 px-12 py-3 rounded-md text-white font-bold hover:bg-sky-400'>
                        Start→
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;