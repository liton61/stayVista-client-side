/* eslint-disable react/prop-types */
const Title = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className='text-2xl font-bold'>{title}</div>
            <div className='font-light text-neutral-500 mt-2 mb-6'>{subtitle}</div>
        </div>
    )
}

export default Title;