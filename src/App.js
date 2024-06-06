import React from 'react'
import Profile from "./Profile/Profile";
import me from "./Profile/me.jpg"
const App =()=> {
  const handleName = (name) => {
    alert(name)
  }
  
  return(
    <Profile fullName='jacem' handleName={handleName}>< img src={me} alt ='myImage'/>  </Profile>
    
    );
    
  }
  
  
   
export default App;

