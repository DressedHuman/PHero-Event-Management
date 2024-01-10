import { useState } from "react";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');

    const sliderVariants = {
        hiddenRight: {
            x: '100%',
            opacity: 0,
        },
        hiddenLeft: {
            x: '-100%',
            opacity: 0,
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.75,
            transition: {
                duration: 0.35,
            },
        },
        hover: {
            scale: 1.2,
            backgroundColor: '#ff00008e',
        }
    };

    const dotVariants = {
        initial: {
            y: 0,
        },
        animate: {
            y: -3,
            scale: 1.3,
            transition: {
                type: "spring",
                stiffness: 1000,
                damping: "10",
            },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1);
    }

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) => prevIndex + 1 === data.length ? 0 : prevIndex + 1);
    }

    const handleDotClick = index => {
        setDirection(index > currentIndex ? "right" : 'left');
        setCurrentIndex(index);
    }

    return (
        <div className="space-y-5 mb-5">
            <div className="relative rounded-[10px] h-[50vh] md:h-[513px] m-auto overflow-hidden">
                {/* showing the image */}
                <AnimatePresence>
                    <motion.div
                        className="rounded-lg h-full"
                        key={currentIndex}
                        variants={sliderVariants}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate='visible'
                        exit={'exit'}
                    >
                        <img
                            className="object-cover w-full h-full"
                            src={data[currentIndex].services.image}
                            alt={data[currentIndex].name} />

                        <div className="bg-black bg-opacity-50 absolute top-0 left-0 bottom-0 right-0 rounded-lg">
                            <div className="absolute top-[35%] text-center left-0 right-0">
                                <h2 className="text-5xl font-bold text-white">{data[currentIndex].name}</h2>
                                <h2 className="text-4xl text-white font-semibold mt-7">Price: {data[currentIndex].services.price}</h2>
                                <button className="btn bg-pink-600 bg-opacity-75 border-none hover:bg-pink-600 hover:bg-opacity-100 text-white font-medium text-2xl mt-12">Get Service</button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between">
                    {/* left button */}
                    <motion.div
                        className="bg-[#fb666675] text-white pt-[10px] pr-2 pb-2 pl-[13px] mx-5 rounded-[50%] absolute top-0 bottom-0 left-0 my-auto flex justify-center items-center w-[25px] h-[25px]"
                        onClick={handlePrev}
                        variants={sliderVariants}
                        whileHover={'hover'}
                    >
                        <button className="-translate-y-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" viewBox="0 96 960 960" width="20" >
                                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                            </svg>
                        </button>
                    </motion.div>

                    {/* right button */}
                    <motion.div
                        className="bg-[#fb666675] text-white pt-[10px] pr-2 pb-2 pl-[13px] mx-5 rounded-[50%] absolute top-0 bottom-0 right-0 my-auto flex justify-center items-center w-[25px] h-[25px]"
                        onClick={handleNext}
                        variants={sliderVariants}
                        whileHover={'hover'}
                    >
                        <button className="-translate-y-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" viewBox="0 96 960 960" width="20" >
                                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
            <motion.div className="flex justify-center gap-5">
                {
                    data.map((pack, index) => (
                        <motion.div
                            key={index}
                            className={`bg-[#333] w-[15px] h-[15px] rounded-[50%] ${currentIndex === index ? "bg-[#af2020]" : 'cursor-pointer hover:bg-[#af20205f]'}`}
                            onClick={() => handleDotClick(index)}
                            variants={dotVariants}
                            initial={'initial'}
                            animate={currentIndex === index ? "animate" : ''}
                            whileHover={'hover'}></motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

Slider.propTypes = {
    data: PropTypes.array,
}

export default Slider;