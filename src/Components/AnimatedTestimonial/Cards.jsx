import React from 'react'

const Cards = ({ quote, author, role, image, altText }) => {
    return (
        <div className="mx-auto md:w-[25vw] w-[100vw] ">
            <div className=" md:px-4">
                <div
                    className="bg-accent2 md:p-4 rounded-lg shadow-lg text-white md:h-[300px] items-center justify-center flex flex-col"
                >
                    <p className="text-sm md:text-lg italic mb-4">{quote}</p>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 w-12 rounded-full"
                                src={image}
                                alt={altText}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium">{author}</div>
                            {role && <div className="text-sm text-gray-400">{role}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards