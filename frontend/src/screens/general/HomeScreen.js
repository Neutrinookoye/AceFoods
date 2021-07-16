import React , { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import Menu from '../../components/Menu'
import { listMenus } from '../../actions/menuActions'



const HomeScreen = () => {
    const dispatch = useDispatch()

    const menuList = useSelector(state => state.menuList)
    const { loading , error , menus } = menuList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(listMenus())
    } , [dispatch])

    return (
        <>
           {userInfo ? <h1>Hello, {userInfo.name}.</h1> : <h1>Our Menu</h1>}
           {
               loading ? (<Loader /> )
               : error ? ( <Message variant='error'>{error}</Message>)
               : (
                    <Row>
                        {
                            menus.map(menu => (
                                <Col key={menu._id} sm={12} md={6} lg={4} xl={3}>
                                    <Menu menu={menu} />
                                </Col>
                            ))
                        }
                    </Row>
               )
           }
        </>
    )
}

export default HomeScreen
