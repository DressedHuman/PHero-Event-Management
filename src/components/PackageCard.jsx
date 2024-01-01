import PropTypes from 'prop-types';

const PackageCard = ({ packageData }) => {
    const { type, services } = packageData;

    return (
        <div className='lg:w-1/2 rounded-lg shadow shadow-white dark:shadow-black bg-black dark:bg-white bg-opacity-5 backdrop-blur-lg'>
            {
                services.map(service => <div key={service.name}>
                    <img className='aspect-video object-cover rounded-lg blur-[2px]' src={service.image} alt={`Image of - ${services.name}`} />
                    <h2>{service.name}</h2>
                    <p>{type}</p>
                    <p>{service.description}</p>
                </div>)
            }
        </div>
    );
};

PackageCard.propTypes = {
    packageData: PropTypes.object,
}

export default PackageCard;