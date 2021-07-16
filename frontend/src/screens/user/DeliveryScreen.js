import React , { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Form , Button } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { saveDeliveryAddress } from '../../actions/cartActions'

const DeliveryScreen = ({ history }) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { deliveryAddress } = cart

    const [address , setAddress] = useState(deliveryAddress.address)
    const [city , setCity] = useState(deliveryAddress.city)
    const [country , setCountry] = useState(deliveryAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveDeliveryAddress({ address , city , country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Delivery</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address </Form.Label>
                    <Form.Control type='text' placeholder='Enter Address' value={address} required
                      onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City </Form.Label>
                    <Form.Control type='text' placeholder='Enter City' value={city} required
                      onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            
                <Form.Group controlId='country'>
                    <Form.Label>Country </Form.Label>
                    <Form.Control type='text' placeholder='Enter Country' value={country} required
                      onChange={(e) => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default DeliveryScreen
