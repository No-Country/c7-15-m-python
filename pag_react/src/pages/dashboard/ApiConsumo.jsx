import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";


const baseUrl = "http://localhost:3001/usuarios"

export default function ApiConsumo() {

  const [list, setList] = useState([]);
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  
  useEffect(() => {
    Axios({
      url: baseUrl
    })
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);

  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpass = document.getElementById("txtpass").value;

    console.log();
    list.forEach(function(


    ) {
      if(txtusu.length===0 || txtpass.length===0){
        alert("Complete Los Datos Faltantes!!");
      }else{
          if(usu===list[0].email && pas===list[0].password){
            
            localStorage.setItem("miLogin", true);
            localStorage.setItem("usu", usu);
            
            console.log(usu);
            console.log(txtusu);
            console.log(pas);
            console.log(txtpass);
            console.log(list.id);
            alert("Entre");
  
          }else{
            
            alert("Error De Usuario y/o Contraseña!!");
            
            document.getElementById("txtusu").value = "";
            document.getElementById("txtpass").value = "";
            document.getElementById("txtusu").focus();
          }
      } 
        
  });

    
  }
  




  return (
  <div>
         <div>
        {list.map(item => (
          <div key={item.id}>
            <h3>{item.apellido}</h3>
            <p>{item.email}</p>
          </div>
        ))} 


      </div>
      <Link to="/"><button class="btn2">Home</button></Link>
            <div>
                          <form id='form_login'>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="txtusu" 
                                        id="txtusu" 
                                        aria-describedby="emailHelp"
                                        onChange={ (e)=>setUsu(e.target.value) }  
                                        required/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="txtpass" 
                                        id="txtpass"  
                                        onChange={ (e)=>setPas(e.target.value) }  
                                        required/>
                                </div>
                                
                                            
                                <div >
                                    <a href="#" className="olvide">Olvidé mi contraseña</a>
                                </div>
                                            
                                <div className="block10 layout"> 
                                    <button type="submit" className="btn btn-outline-danger espacio" onClick={ iniciarSesion }>Iniciar sesión</button>
                    
                                    
                                </div>
                            </form>
                    </div>
    </div>
  )
}
