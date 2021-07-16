import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/general/HomeScreen'
import MenuScreen from './screens/general/MenuScreen'
import CartScreen from './screens/general/CartScreen';
import LoginScreen from './screens/general/LoginScreen';
import RegisterScreen from './screens/general/RegisterScreen';
import ProfileScreen from './screens/user/ProfileScreen';
import DeliveryScreen from './screens/user/DeliveryScreen';
import PaymentScreen from './screens/user/PaymentScreen';
import PlaceOrderScreen from './screens/user/PlaceOrderScreen';
import OrderScreen from './screens/user/OrderScreen';

function App() {
  return (
    <Router>
      < Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/cart/:id?' component={CartScreen} />  
          <Route path='/delivery' component={DeliveryScreen} />  
          <Route path='/placeorder' component={PlaceOrderScreen} />  
          <Route path='/order/:id' component={OrderScreen} />  
          <Route path='/payment' component={PaymentScreen} />  
          <Route path='/menu/:id' component={MenuScreen} />  
          <Route path='/' component={HomeScreen} exact/>  
        </Container>
      </main>
      < Footer />
    </Router>
  );
}

export default App;

