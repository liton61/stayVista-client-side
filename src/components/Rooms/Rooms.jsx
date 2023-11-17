import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../../Shared/Navbar/Container";
import { useSearchParams } from "react-router-dom";
import Empty from "../../pages/Empty/Empty";
import Loader from "../Loader/Loader";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');
    useEffect(() => {
        setLoading(true);
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filterRoom = data.filter(room => room.category === category);
                    setRooms(filterRoom)
                }
                else setRooms(data)
                setLoading(false);
            })
    }, [category])
    if (loading) return <Loader></Loader>
    return (
        <Container>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-10">
                    {
                        rooms.map(room => <Card key={room._id} room={room}></Card>)
                    }
                </div>
                    :
                    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
                        <Empty center={true} title='No rooms available in this category !' subtitle='Please select others category !'></Empty>
                    </div>
            }
        </Container>
    );
};

export default Rooms;