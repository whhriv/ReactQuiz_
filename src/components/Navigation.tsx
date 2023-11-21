import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import SignUp from './SignUp'
import { Nav } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import AllQuestions from '../views/AllQuestions'



const loggedUser = ""
console.log(loggedUser)

type NavigationProps = {
    isLoggedIn: boolean
    handleLogOut: ()=>void
}

export default function Navigation({ isLoggedIn, handleLogOut }: NavigationProps) {
    return (
        <Navbar className='bg-dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand as={Link} to="/">Application</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/AllQuestions">Questions</Nav.Link>
                { isLoggedIn ? (
                    <>
                       <Nav.Link as={Link} to="/CreateQuestion">Create Questions</Nav.Link>
                       <Nav.Link as={Link} to="/Logout" onClick={handleLogOut}>Logout</Nav.Link>
                      </>
                ) : ( 
                    <>
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/SignUp">SignUp</Nav.Link>
                    <Nav.Link as={Link} to="/AllQuestions">Questions</Nav.Link>
                   
                    </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
    }