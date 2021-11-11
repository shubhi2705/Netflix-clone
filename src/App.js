import React,{useEffect} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Banner from './components/Banner/Banner';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginScreen from './components/LoginScreen/LoginScreen';
import {auth} from './firebase';
import { onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import {logout,login,selectUser} from './features/userSlice';
// import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';

function App() {
  const user=useSelector(selectUser);
   const dispatch = useDispatch();
useEffect(() => {
 onAuthStateChanged(auth,(userAuth)=>{
   if(userAuth)
   {
    dispatch(login({
      uid:userAuth.uid,
      email:userAuth.email,
    }))
   }
   else{
     dispatch(logout());
   }
 })
//  return unsubscribe;
}, [])


  return (
    <div className="app">
    
     <Router>
      {!user?<LoginScreen /> :
       <Switch>
        <Route path="/profile" exact>
       <ProfileScreen user={user}/>
       </Route>
       <Route path="/" >
       <HomeScreen />
       </Route>
       
     </Switch>
      }       
     </Router>
    </div>
  );
}

export default App;
