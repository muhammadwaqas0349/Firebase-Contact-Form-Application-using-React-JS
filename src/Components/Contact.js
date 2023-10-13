import "./Contact.css";
import React, { useState } from 'react'; 
import { db } from "../fireBase.js"; 


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  



const handleSubmit = (e) => {
  e.preventDefault(); 

  if(name && email && message){
                      db.collection("contacts").add( {
                        
                        Name: name, Email: email, Message: message,
                      })
                      .then( () => { alert("Form has been Submitted Successfully 👍"); 
                    
                              setLoader(true) })
                    
                      .catch( (error) => { alert("errore is here");
                              setLoader(false)
                    });

    setName(""); 
    setEmail("");
    setMessage("");
   }

   else {
    alert("Please Fill all the data");
  }
  

  
}; 


  return (
    <div className="app">   
      <form className='form' onSubmit={handleSubmit}>
      <h1>Contact Us 🤳 </h1>

      <label>Name</label>
      <input placeholder='Name' value={name} onChange={ (e) => setName(e.target.value) }  />

      <label>Email</label>
      <input placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value)}  />

      <label>Message</label>
      <textarea placeholder='Write Message Here' value={message} onChange={ (e) => setMessage(e.target.value)}  />
      
      <button type="submit" style={ {background: loader? "green" : "rgb(2, 2, 110)" }}
      >Submit</button>
    </form>
    </div>
 
  )
}

export default Contact; 