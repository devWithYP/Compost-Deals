import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import NoPage from './pages/nopage/NoPage';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import MyState from './context/data/myState';
import Signin from './pages/login/Signin';
import Signup from './pages/login/Signup';
import Form from './pages/login/Form';
import Details from './pages/details/Details';
import Dashboard from './pages/admin/dashboard/Dashboard';
import SellerForm from './pages/sell/SellerForm';
import MyAccount from './pages/account/MyAccount';
import SellerConfirmation from './pages/sell/SellerConfirmation';
import SellerDashboard from './pages/sell/sellerDashboard/SellerDashboard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/logout/Logout';
import AddProduct from './pages/sell/pages/AddProduct';
import Preloader from './components/preloader/Preloader';

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        } />
        <Route path="/sellconfirm" element={<SellerConfirmation/>} />
        <Route path="/sellform" element={<SellerForm/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/preloader" element={<Preloader/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/details" element={
          <ProtectedRoute>
            <Details/>
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/sellerdashboard" element={
          <ProtectedRoutesForSeller>
            <SellerDashboard/>
          </ProtectedRoutesForSeller>
        } />
        <Route path="/account" element={
          <ProtectedRoute>
            <MyAccount/>
          </ProtectedRoute>
        } />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App


//user normal
export const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/signin' />
  }
}


//seller
export const ProtectedRoutesForSeller = ({children}) => {
  const seller = JSON.parse(localStorage.getItem('user'))
  console.log(seller.user.email)
  if (seller.user.email === '2210008@ritindia.edu') {
    return children
  }
  else {
    return <Navigate to='/signin' />
  }
}