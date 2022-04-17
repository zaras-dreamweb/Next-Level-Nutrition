import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logo.png"

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    return (
        <div>
            <Navbar bg="warning" variant="dark">
                <Container>
                    <img style={{ height: '50px' }} src={logo} alt="" />
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>


                        {
                            user
                                ?
                                <button onClick={handleSignOut} className='text-bold pb-2'>SignOut</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;