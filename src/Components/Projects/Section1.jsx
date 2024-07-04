import React from 'react';
import Mount from '../../assets/Mountain.png';
import { motion, useTransform } from 'framer-motion';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

    return (
        <motion.div style={{ scale, rotate }} className='sticky top-0 bg-secondary h-[120vh] text-2xl flex items-center text-white pb-[20vh] overflow-hidden'>
            <div className='w-10/12 h-auto mx-auto flex items-center shadow-xl bg-primary rounded py-8'>
                <div className='w-4/12 px-4'>
                    <img src={Mount} alt='Mount' />
                </div>
                <div className='w-8/12 space-y-8 px-8'>
                    <h1 className='text-4xl font-extrabold text-accent'>PROJECT NAME</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quae, id quisquam cum deleniti voluptate, debitis aperiam amet maxime reiciendis iste? Culpa, eum magnam laboriosam ducimus tenetur quisquam fugiat.
                        Itaque impedit cumque, quibusdam expedita suscipit blanditiis, aperiam voluptas molestiae et maxime consequuntur molestias. Explicabo recusandae nemo facilis deserunt, ipsa velit soluta officiis, at obcaecati, porro excepturi fugit accusamus minus!
                        Suscipit quidem deleniti ipsam in omnis rerum eius blanditiis sed tenetur? Quae, totam tempora eum hic commodi laboriosam voluptatem voluptatibus assumenda ut a asperiores omnis autem eveniet rerum obcaecati odit?</p>
                    <GlowingButton children={'View Project'} />
                </div>
            </div>
        </motion.div>
    );
};

export default Section1;
