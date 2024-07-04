import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Projects = () => {
    const container = useRef();
    const container1 = useRef();

    const scroll1 = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const scroll2 = useScroll({
        target: container1,
        offset: ['start start', 'center center'],
    });

    return (
        <main>
            <div className='bg-accent text-white font-extrabold text-5xl font-poppins p-4 text-center'>OUR PROJECTS</div>
            <div ref={container} className='relative min-h-[250vh] bg-black'>
                <Section1 scrollYProgress={scroll1.scrollYProgress} />
                <Section2 scrollYProgress={scroll1.scrollYProgress} />
            </div>
            <div ref={container1} className='min-h-[250vh] bg-black relative'>
                <Section3 scrollYProgress={scroll2.scrollYProgress} />
                <Section4 scrollYProgress={scroll2.scrollYProgress} />
            </div>
        </main>
    );
};

export default Projects;
