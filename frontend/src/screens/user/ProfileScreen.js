import React , { useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Form , Button , Row , Col } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getUserDetails , updateUserProfile } from '../../actions/userActions' 

const ProfileScreen = ({ history }) => {
    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ confirmPassword , setConfirmPassword ] = useState('')
    const [ message , setMessage ] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)  //To be sure only logged in users can access this page.
    const { userInfo } = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const { loading , error , user } = userDetails

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { error:updateError , success } = userUpdateProfile

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                id : userInfo._id , name , email , password , confirmPassword
            }))
        }
    }

    useEffect(() => {
        if (!userInfo) {
            history.push('/login') 
        } else {
            if(!user.name) {
                dispatch(getUserDetails(userInfo._id))
            }else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    } , [dispatch , history , userInfo , user])

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {error && <Message variant='danger'>{error}</Message>}
                {updateError && <Message variant='danger'>{updateError}</Message>}
                {success && <Message variant='success'>Profile Updated</Message>}
                {message && <Message variant='danger'>{message}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name </Form.Label>
                        <Form.Control type='name' placeholder='Enter name' value={name} 
                        onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} 
                        onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} 
                        onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    )
}

export default ProfileScreen
