import { Button, Card, Container, Row, Col } from "react-bootstrap";
import TripListItem from "../components/TripListItem";

function TripListPage() {

    return <Container fluid style={{ maxWidth: '600px' }} className="px-5">
        <h2 className="text-center mt-4 mb-5">Daftar perjalanan</h2>
        <ul className="d-flex flex-column gap-4">
            <TripListItem title={'Trips'} description={'First trip'} lastEntry={'3 januari 2020'}/>
            <TripListItem title={'Trips'} description={'First trip'} lastEntry={'3 januari 2020'}/>
            <TripListItem title={'Trips'} description={'First trip'} lastEntry={'3 januari 2020'}/>
            <TripListItem title={'Trips'} description={'First trip'} lastEntry={'3 januari 2020'}/>
            <TripListItem title={'Trips'} description={'First trip'} lastEntry={'3 januari 2020'}/>
        </ul>
    </Container>;
}


export default TripListPage;
