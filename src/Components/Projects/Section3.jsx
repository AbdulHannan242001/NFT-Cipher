// Section3.jsx
import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import LMS from '../../assets/LMS.png';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section3 = ({ scrollYProgress }) => {
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const opacity = useTransform(smoothScroll, [0, 1], [0, 1]);

    return (
        <motion.div style={{ opacity }} className='sticky w-full top-0 h-[120vh] bg-darkBlue text-2xl flex items-center text-white md:py-[20vh] overflow-hidden'>
            <div className='w-10/12 mx-auto bg-primary rounded-lg py-8 px-4 md:px-6 shadow-2xl shadow-accent mt-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-6/12 md:p-4 flex flex-col items-center overflow-hidden'>
                        <img src={LMS} alt='LMS' height={400} width={400} className='mb-8 border-white border-2 rounded-md shadow-md object-cover object-center' />
                        <h1 className='text-base md:text-4xl my-2 md:my-8 font-extrabold text-accent'>LEARNING-MANAGEMENT-SYSTEM (LMS)</h1>
                        <p className='text-sm md:text-lg'>A Complete Learning-Management-System for Students, Teachers and Administrators to Manage their Learning, Assessments, Courses and More.</p>
                    </div>
                    <div className='md:w-6/12 mt-0 md:mt-8 py-4 md:p-4 md:space-y-6 flex flex-col justify-center'>
                        <div className='space-y-1 md:space-y-4'>
                            <h2 className='text-base md:text-3xl font-bold text-accent'>Key Features</h2>
                            <ul className='list-disc list-inside text-sm md:text-base'>
                                <li><span className='font-semibold'>Dynamic Website:</span> Built with Tailwind and React for fastest loading.</li>
                                <li><span className='font-semibold'>Interactive Content:</span> Engaging elements like sliders, galleries, and animations.</li>
                                <li><span className='font-semibold'>Database Integration:</span> Integration of forms for inquiries and client communication.</li>
                                <li><span className='font-semibold'>Api Integration:</span> Integration of forms for inquiries and client communication.</li>
                                <li><span className='font-semibold'>Analytics Integration:</span> Tools to monitor website performance and visitor behavior.</li>
                            </ul>
                        </div>
                        <div className='space-y-1 md:space-y-4 hidden md:block'>
                            <h2 className='text-3xl font-bold text-accent'>Technologies Used</h2>
                            <div className='flex flex-wrap gap-2 text-base'>
                                <span className='bg-accent text-secondary rounded-full px-4 py-2'>React</span>
                                <span className='bg-accent text-secondary rounded-full px-4 py-2'>Tailwind CSS</span>
                                <span className='bg-accent text-secondary rounded-full px-4 py-2'>Mongo Db</span>
                                <span className='bg-accent text-secondary rounded-full px-4 py-2'>Node.js</span>
                            </div>
                        </div>
                        <div className='flex justify-start space-x-4'>
                            <GlowingButton className={'md:text-base text-xs text-accent border-accent'}>
                                <a href='https://lms.emaan.edu.pk' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </GlowingButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Section3;
