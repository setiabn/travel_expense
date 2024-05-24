import { Container } from "react-bootstrap";
import TripListPage from "./pages/TripListPage";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Container fluid style={{height: '100vh', width: '100vw'}}>
        <TripListPage/>
    </Container>
  )
}

export default App
