import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import UploadPost from './UploadPost';

function App() {
  const [user,setUser] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const unSubscribe= auth.onAuthStateChanged(authUser =>{
      if(authUser){
        setUser(authUser);
        setIsUser(true);
        console.log(authUser);
        if(!user.displayName){
          return authUser.updateProfile({
            displayName : 'tushar_01'
          })
        }
      }
      else{
        setUser(false);
        setIsUser(false);
      }
    })

    return () => unSubscribe;
  }, [])
  const handleLogOut = () =>{
    auth.signOut();
  }
  return (
    <div className="App">
      <Navbar/>
      {isUser && <h1 style={{textAlign:'center',margin: '10px 0',fontWeight:'bold',fontSize:'2em'}}>welcome 😇 {user.displayName} <span style={{color:'lightblue',cursor: 'pointer'}} onClick={handleLogOut}>log out</span></h1>}
      {isUser && <UploadPost user={user} />}
      {isUser || <Login/>}
      <Home user={user}/>

    </div>
  );
}

export default App;
