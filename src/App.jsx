import { Container } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Container fluid style={{height: '100vh', width: '100vw'}}>
      <TopNavbar/>
    </Container>
  )
}

export default App
