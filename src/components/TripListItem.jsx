import { Button, Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function TripListItem({ title, description, lastEntry }) {
    return <>
        <Card>
            <Card.Body>
                <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>{title}</div>
                        <DropdownButton align='end' variant="Secondary" id="dropdown-basic-button" title="..." cla>
                            <Dropdown.Item as='button'>Delete</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Footer>
                    <div className="d-flex gap-2">
                        <div className="w-100">
                            <div style={{ fontSize: 11 }}>Last entry:</div>
                            <div style={{ fontSize: 11 }}>{lastEntry}</div>
                        </div>
                        <Button>Detail</Button>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card></>
}

export default TripListItem;