import banner from '../assets/images/banner-2.jpg';

const Banner = () => {
    return (
        <div className='h-[270px] md:h-[350px] lg:h-[570px] w-full relative'>
            <img src={banner} className='w-full h-full object-cover opacity-75' alt="Banner Image" />
            <div className='absolute top-0 bottom-0 left-[15px] md:left-[35px] lg:left-[75px] flex flex-col justify-center items-start'>
                <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-pink-500'>Your event, Rest is Ours</h2>
                <p className='w-[250px] md:w-[350px] lg:w-[570px] text-white text-lg'>Our expert planning and executing team takes stress to make you happy enough by finishing the event start to finishing.</p>
            </div>
        </div>
    );
};

export default Banner;