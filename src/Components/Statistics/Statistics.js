import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const data = useLoaderData()
    const quizData = data.data
    console.log(quizData);
    return (
        <div className='mt-12'>
            <div className="flex flex-col mb-16 sm:text-center">
                <a href="/" className="mb-6 sm:mx-auto">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                </a>
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                        </span>{' '}
                        Observe Your Quiz progress through this Chart here.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Along x-Axis  it is showing Your topics name and along Y-axis its showing total quiz number.
                    </p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={quizData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='total' fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;