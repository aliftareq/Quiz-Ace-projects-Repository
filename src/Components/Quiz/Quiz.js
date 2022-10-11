import React from 'react';

const Quiz = () => {
    return (
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                20 Nov 2020
            </p>
            <a
                href="/"
                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                aria-label="Read article"
                title="Nori grape silver beet broccoli kombu beet"
            >
                Nori grape silver beet broccoli kombu beet
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
            </p>
            <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
                Read more
            </a>
        </div>
    );
};

export default Quiz;