
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking/Booking';
import Details from './components/Booking/Details';
import Footer from './components/Footer/Footer';
import Addservice from './components/home/addservice/Addservice';
import Front from './components/home/firstpage/Front';
import Login from './components/login/Login/Login';
import PrivateRoute from './components/login/PrivateRoute/PrivateRoute';
import AllBooks from './components/manageservices/bookmanage/AllBooks';
import Servicemanage from './components/manageservices/servicemanage/Servicemanage';
import Myorder from './components/myOrder/Myorder';
import Notfound from './components/Notfound/Notfound';
import Topnav from './components/topnav/Topnav';
import AuthProvider from './contexts/AuthProvider';



function App() {
  return (
    <>
      <AuthProvider>


        <BrowserRouter>
          <Topnav></Topnav>

          <Switch>
            <Route exact path='/'>

              <Front></Front>
            </Route>
            <Route exact path='/home'>
              <Front></Front>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path='/addservice'>
              <Addservice>
              </Addservice>
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
              <Myorder>

              </Myorder>
            </PrivateRoute>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/details/:serviceId'>
              <Details></Details>
            </PrivateRoute>

            <Route path='/allorder'>
              <AllBooks>

              </AllBooks>
            </Route>
            <PrivateRoute path='/servicemanage'>
              <Servicemanage>

              </Servicemanage>
            </PrivateRoute>
            <Route path='/servicemanage'>
              <Servicemanage>

              </Servicemanage>
            </Route>
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>




    </>

  );
}

export default App;
