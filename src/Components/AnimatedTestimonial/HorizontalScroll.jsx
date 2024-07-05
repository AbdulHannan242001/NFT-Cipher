import React from 'react'
import Cards from './Cards';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const HorizontalScroll = () => {
    const testimonials = [
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "John Doe",
            role: "CEO, Example Company",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            altText: "John Doe"
        },
        {
            quote:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Jane Smith",
            role: "Product Manager, Another Company",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            altText: "John Doe"
        },
        {
            quote:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Jane Smith",
            role: "Product Manager, Another Company",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            altText: "John Doe"
        },
        {
            quote:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Jane Smith",
            role: "Product Manager, Another Company",
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            altText: "John Doe"
        },
    ];
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const x = useTransform(smoothScroll, [0, 1], ["50%", "-50%"]);
    return (
        <section ref={ref} className='relative h-[300vh]'>
            <div className='sticky top-0 flex h-screen items-center justify-center overflow-hidden'>
                <motion.div style={{ x }} className='flex space-x-8'>
                    {testimonials.map((test, index) => (
                        <Cards key={index} {...test} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScroll