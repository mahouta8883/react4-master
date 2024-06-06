import React from 'react'
import PropTypes from "prop-types";

   const Profile =props=>{
      return(
         <div style={{ color:'whitesmoke',backgroundColor:'sienna', textAlign:'center', fontSize:''}} >
         {props.children}
         {props.fullName}
         {props.bio} 
         {props.profession}
         {props.handleName(props.fullName)}
         </div>
         )
   }
   Profile.defaultProps = {
      fullName:'jacem', bio:'student',profession:'web developer'
      
  
     };
   Profile.propTypes ={
      fullName:PropTypes.string,
      bio:PropTypes.string,
      profession:PropTypes.string,

 
    }
   export default Profile;