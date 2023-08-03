import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import './components/Profile.css';
import "./App.css";
import { useAuth0 } from '@auth0/auth0-react';
import PassGen from './components/pages/PassGen';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return(
      <div className="cards-container">
      <div className="cards-wrapper">
      <h2>Please log in to view your profile.</h2>
      </div>
      </div>
    )
  }

  return (
    <div className="cards-container">
      <div className="cards-wrapper">
      <div className="profile-picture">
      <img src={user.picture} alt= "Profile" />  
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      </div>
      </div>
    </div> 
  );
}


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path ='/'element= {<Home/>}/>
        <Route path ='/PassGen' element = {<PassGen/>}/>
        <Route path ='/Profile' element ={<Profile/>}/>
        </Routes>
      </Router>
   
    </>
  );
}
export default App;
