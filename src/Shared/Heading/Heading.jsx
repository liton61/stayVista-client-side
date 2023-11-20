/* eslint-disable react/prop-types */
import Title from "../Title/Title";


const Heading = ({ room }) => {
    const { title, image, location } = room;

    return (
        <div>
            <Title title={title} subtitle={location}></Title>
            <div className='w-full md:h-[80vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src={image}
                    alt='header image'
                />
            </div>
        </div>
    );
};

export default Heading;