
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'
import OrderListPage from './pages/OrderListPage'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path = '/product/:id' component={ProductPage}/>
          <Route path = '/cart/:id?' component={CartPage}/>
          <Route path = '/shipping' component={ShippingPage}/>
          <Route path = '/payment' component={PaymentPage}/>
          <Route path = '/placeorder' component={PlaceOrderPage}/>
          <Route path = '/order/:id' component={OrderPage}/>
          <Route path = '/admin/orderlist' exact component = {OrderListPage}/>
          <Route path = '/login'  component={LoginPage}/>
          <Route path = '/register'  component={RegisterPage}/>
          <Route path = '/profile'  component={ProfilePage}/>
          <Route path = '/admin/userList' exact component = {UserListPage}/>
          <Route path = '/admin/user/:id/edit' component = {UserEditPage}/>
          <Route path = '/admin/productList' exact component = {ProductListPage}/>
          <Route path = '/admin/productList/:pageNumber' exact component = {ProductListPage}/>
          <Route path = '/admin/product/:id/edit' exact component = {ProductEditPage}/>
          <Route path = '/search/:keyword' exact component={HomePage}/>
          
          <Route path = '/page/:pageNumber' exact component={HomePage}/>
          <Route path = '/search/:keyword/page/:pageNumber' exact component={HomePage}/> 
          <Route path = '/' exact component={HomePage}/>
        </Container>
        
      </main>
      <Footer/>
     
    </Router>
  )
}

export default App

