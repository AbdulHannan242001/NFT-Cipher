import React from 'react';
import HorizontalScroll from './HorizontalScroll';
const AnimatedTestimonial = () => {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary to-darkBlue " >
            <div className="bg-accent w-full p-2 md:py-4 flex justify-center sticky top-0 z-20">
                <h1 className="text-3xl md:text-5xl font-extrabold font-poppins text-white">TESTIMONIALS</h1>
            </div>
            <div className="w-10/12 mx-auto relative z-10 inset-0 font-poppins text-center p-4 md:p-10">
                <HorizontalScroll />
            </div>
        </div >
    );
};

export default AnimatedTestimonial;


