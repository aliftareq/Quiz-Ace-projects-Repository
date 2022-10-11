import React from 'react';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    return (
        <div>
            <Header></Header>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <Topic></Topic>
                    <Topic></Topic>
                    <Topic></Topic>
                    <Topic></Topic>
                </div>
            </div>
        </div>
    );
};

export default Topics