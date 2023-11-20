import { useParams } from "react-router-dom";
import Container from "../../Shared/Navbar/Container";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "../../Shared/Heading/Heading";
import RoomInfo from "../../Shared/RoomInfo/RoomInfo";
import Reservation from "../../Shared/Reservation/Reservation";


const RoomDetails = () => {
    const { id } = useParams();
    const [rooms, setRooms] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRooms(singleRoom)
                setLoading(false)
            })
    }, [id])
    if (loading) return <Loader></Loader>
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    <Heading room={rooms}></Heading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6 text-justify">
                    <RoomInfo room={rooms}></RoomInfo>
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        <Reservation room={rooms}></Reservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;