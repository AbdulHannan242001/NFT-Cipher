// import React from 'react';
// import { motion, useTransform, useInView } from 'framer-motion';
// import Mount from '../../assets/Mount.png';
// import GlowingButton from '../GlowingButton/GlowingButton';

// const Section4 = () => {

//     const ref = React.useRef(null);
//     const isInView = useInView(ref, { once: false });


//     return (
//         <div ref={ref} className='absolute w-full top-0 h-[120vh] bg-grey text-2xl flex flex-col items-center justify-center text-white pb-[20vh]'>
//             <motion.div
//                 style={{ y: isInView }}
//                 initial={{ opacity: 0.3, y: -100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 3, ease: 'easeInOut' }}
//                 className='w-10/12 h-auto mx-auto flex items-center shadow-xl bg-darkBlue rounded py-8'>
//                 <div className='w-4/12 px-4'>
//                     <img src={Mount} alt='Mount' />
//                 </div>
//                 <div className='w-8/12 space-y-8 px-8'>
//                     <h1 className='text-4xl font-extrabold text-primary'>PROJECT NAME</h1>
//                     <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quae, id quisquam cum deleniti voluptate, debitis aperiam amet maxime reiciendis iste? Culpa, eum magnam laboriosam ducimus tenetur quisquam fugiat.
//                         Itaque impedit cumque, quibusdam expedita suscipit blanditiis, aperiam voluptas molestiae et maxime consequuntur molestias. Explicabo recusandae nemo facilis deserunt, ipsa velit soluta officiis, at obcaecati, porro excepturi fugit accusamus minus!
//                         Suscipit quidem deleniti ipsam in omnis rerum eius blanditiis sed tenetur? Quae, totam tempora eum hic commodi laboriosam voluptatem voluptatibus assumenda ut a asperiores omnis autem eveniet rerum obcaecati odit?</p>
//                     <GlowingButton children={'View Project'} />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default Section4;




import React from 'react';
import { motion, useInView } from 'framer-motion';
import Mount from '../../assets/Mount.png';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section4 = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div ref={ref} className='absolute w-full top-0 h-[120vh] bg-grey text-2xl flex flex-col items-center justify-center text-white pb-[20vh]'>
            <motion.div
                initial={{ opacity: 0.3, y: -100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: -100 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='w-10/12 h-auto mx-auto flex items-center shadow-xl bg-darkBlue rounded py-8'
            >
                <div className='w-4/12 px-4'>
                    <img src={Mount} alt='Mount' />
                </div>
                <div className='w-8/12 space-y-8 px-8'>
                    <h1 className='text-4xl font-extrabold text-primary'>PROJECT NAME</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quae, id quisquam cum deleniti voluptate, debitis aperiam amet maxime reiciendis iste? Culpa, eum magnam laboriosam ducimus tenetur quisquam fugiat.
                        Itaque impedit cumque, quibusdam expedita suscipit blanditiis, aperiam voluptas molestiae et maxime consequuntur molestias. Explicabo recusandae nemo facilis deserunt, ipsa velit soluta officiis, at obcaecati, porro excepturi fugit accusamus minus!
                        Suscipit quidem deleniti ipsam in omnis rerum eius blanditiis sed tenetur? Quae, totam tempora eum hic commodi laboriosam voluptatem voluptatibus assumenda ut a asperiores omnis autem eveniet rerum obcaecati odit?
                    </p>
                    <GlowingButton link="https://example.com" children={'View Project'} />
                </div>
            </motion.div>
        </div>
    );
};

export default Section4;
