import React from 'react'
import {Link} from 'react-router-dom'

export default function LoginP() {
  return (
    <React.Fragment>
        <div className="flex layout">
            <div className="block14 layout">
                <div className="block15 layout">
                    <div className="block15__item">
                        <a href="#"><img src="../assets/img/KeComer.png" alt="" className="icon1 layout" /></a>
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

                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                            
                                <div >
                                    <a href="#" className="olvide">Olvidé mi contraseña</a>
                                </div>
                                            
                                <div className="block10 layout"> 
                                    <button type="submit" className="btn btn-outline-danger espacio">Iniciar sesión</button>
                    
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
