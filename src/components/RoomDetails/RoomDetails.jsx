import { useParams } from "react-router-dom";
import Container from "../../Shared/Navbar/Container";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";


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
            {rooms.title}
        </Container>
    );
};

export default RoomDetails;