import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import Home from '../home/Home';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

function LoginP(){

        const comprobarSesion = () => {
          var sesion = localStorage.getItem("miLogin");
          if(sesion){
            return JSON.parse(sesion);
          }else{
            return false;
          }
        }
      
      
      
        const [miLogin, setMiLogin] = useState(comprobarSesion());
        const [usu, setUsu] = useState("");
        const [pas, setPas] = useState("");
      
      
      
        function iniciarSesion(e){
          e.preventDefault();
          var txtusu = document.getElementById("txtusu").value;
          var txtpass = document.getElementById("txtpass").value;
          if(txtusu.length===0 || txtpass.length===0){
            alert("Complete Los Datos Faltantes!!");
          }else{
            if(usu==="ema@ema.com" && pas==="123"){
              setMiLogin(true);
              localStorage.setItem("miLogin", true);
              localStorage.setItem("usu", usu);
              document.getElementById("form_login").style.display = "none";
            }else{
              setMiLogin(false);
              alert("Error De Usuario y/o Contraseña!!");
              
              document.getElementById("txtusu").value = "";
              document.getElementById("txtpass").value = "";
              document.getElementById("txtusu").focus();
            }
          }
        }
      
      
   

  return (
    <React.Fragment>
        <div className="flex layout">
            <div className="block14 layout">
                <div className="block15 layout">
                    <div className="block15__item">
                        <Link to="/"><img src="../assets/img/KeComer.png" alt="" className="icon1 layout" /></Link>
                    </div>
                    <div className="spacer block15__spacer"></div>
                    <h5 className="highlights3 layout">KE COMER</h5>
                </div>
            </div>
            <div className="block1 layout">
                <div className="block2 layout">
                    <div className="block3 layout">
                        <div>
                            <h1 className="hero_title layout">Iniciar sesión</h1>
                            <div>
                                <h3 className="highlights layout">¿No tenés cuenta?  <Link to="/creacuenta" className="crea_cuenta">  Crear cuenta</Link></h3>
                            <div>
                        </div>
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
                    
                                    <button type="button" className="btn btn-outline-secondary espacio"><img src="../assets/img/44d99b5c0ac21f42e4480177f374344a.png" alt="" width="20"/>Ingresar con Google</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default LoginP;