// src/components/AnimatedTestimonial.js

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe",
        role: "CEO, Example Company",
    },
    {
        quote:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Jane Smith",
        role: "Product Manager, Another Company",
    },
    {
        quote:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Jane Smith",
        role: "Product Manager, Another Company",
    },
    {
        quote:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Jane Smith",
        role: "Product Manager, Another Company",
    },
];

const AnimatedTestimonial = () => {
    return (
        <div className="bg-secondary min-h-screen">
            <div className="text-center bg-grey py-4">
                <h1 className="text-5xl font-extrabold font-poppins text-darkBlue">TESTIMONIALS</h1>
            </div>
            <div className="max-w-3xl mx-auto ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-primary p-6 rounded-lg shadow-lg text-white"
                        >
                            <p className="text-lg italic mb-4">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src="https://via.placeholder.com/150"
                                        alt={`${testimonial.author}'s profile`}
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium">{testimonial.author}</div>
                                    {testimonial.role && <div className="text-sm text-gray-400">{testimonial.role}</div>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AnimatedTestimonial;
