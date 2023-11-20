/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import Button from '../../components/Button/Button';
import Calender from '../Calender/Calender';
import { useEffect, useState } from 'react';

const Reservation = ({ room }) => {
    const [totalDays, setTotalDays] = useState('');
    console.log(totalDays);
    useEffect(() => {
        if (room?.to && room?.from) {
            const days = formatDistance(new Date(room.to), new Date(room.from)).split('')[0];
            setTotalDays(days);
        }
    }, [room?.to, room?.from])
    return (
        <div className='rounded-xl border-[1px]'>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-semibold p-4'>${room.price}</h2>
                <h3 className='font-medium text-neutral-500'>Night</h3>
            </div>
            <hr />
            <div className='flex justify-center'>
                <Calender></Calender>
            </div>
            <hr />
            <div className='p-4'>
                <Button label={'Reservation'}></Button>
            </div>
            <div className='flex justify-between p-4 font-semibold'>
                <h2>Total</h2>
                <h2>${room.price}</h2>
            </div>
        </div>
    );
};

export default Reservation;