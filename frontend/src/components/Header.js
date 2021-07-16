import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap' 
import { Nav, Navbar, NavDropdown , Container } from 'react-bootstrap'
import { logoutUser } from '../actions/userActions'


const Header = () => {
    let date = new Date()
    let dd = JSON.stringify(date)
    let d = dd.split('T')
    let da = d[1].split(':')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logoutUser())
    }

    return ( 
        <header>
            <Navbar bg='' variant='' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>AceFoods
                        { Number(da[0]) < 12  ? <h4>Good Morning</h4> 
                            : Number(da[0]) >= 12 && Number(da[0]) <= 14 ? <h4> Good Afternoon </h4>
                            : Number(da[0]) >= 15 && Number(da[0]) <= 18 ? <h4>Good evening</h4>
                            : <h4>Goodnight!</h4>
                        }

                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className='fa fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo ? 
                                ( <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>     
                                    </NavDropdown> 
                                ) : (<LinkContainer to="/login">
                                    <Nav.Link><i className='fa fa-user'></i> Sign In</Nav.Link>
                                    </LinkContainer> 
                                )
                            }                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
