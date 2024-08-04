import './App.css';
import Footer from './Components/Footerr/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Register from './Components/auth/Register';
import Intern from "./Components/Internships/Intern"
import JobAvl from "./Components/Job/JobAvl"
import JobDetail from './Components/Job/JobDetail';
import InternDeatil from "./Components/Internships/InternDeatil"
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from "./Feature/Userslice"
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import Profile from './profile/Profile';
import AdminLogin from './Admin/AdminLogin';
import Adminpanel from './Admin/Adminpanel';
import ViewAllApplication from "./Admin/ViewAllApplication"
import Postinternships from './Admin/Postinternships';
import DeatilApplication from './Applications/DeatilApplication';
import UserApplicatiom from './profile/UserApplicatiom';
import UserapplicationDetail from "./Applications/DeatilApplicationUser";
import  LoginButton  from "./Components/auth/login"
import  LogoutButton  from "./Components/auth/logout"



function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );
  return (
    <div className="App">
<Navbar/>
<button className="btn3"><LoginButton/> </button>
<button className="btn4"> <LogoutButton/> </button>

<Routes>
  <Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/internship' element={<Intern/>}/>
<Route path='/Jobs' element={<JobAvl/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/detailjob' element={<JobDetail/>}/>
<Route path='/detailInternship' element={<InternDeatil/>}/>
<Route path='/detailApplication' element={<DeatilApplication/>}/>
<Route path='/adminLogin' element={<AdminLogin/>}/>
<Route path='/adminepanel' element={<Adminpanel/>}/>
<Route path='/postInternship' element={<Postinternships/>}/>
<Route path='/applications' element={<ViewAllApplication/>}/>
<Route path='/UserapplicationDetail' element={< UserapplicationDetail/>}/>
<Route path='/userapplication' element={<UserApplicatiom/>}/>
</Routes>
<Footer/>
    </div>
  );
}

export default App;