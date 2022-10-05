import React from 'react'
import {Link} from 'react-router-dom'

export default function CrearCuenta() {
  return (
    <React.Fragment>
                    <div className="flex layout">
                        <div className="block14 layout">
                            <div className="block15 layout">
                                <div className="block15__item">
                                    <Link to="/"><img src="../assets/img/logoPpal.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="block1 layout">
                            <div className="block2 layout">
                                <div className="block3 layout">
                                    <div>
                                        <h1 className="hero_title layout">Crear Cuenta</h1>
                                        <div>
                                            <h3 className="highlights layout">¿Ya tenés cuenta?  <Link to="/login" className="crea_cuenta"> Iniciar sesión</Link></h3>
                                        <div>
                                    </div>

                                        <form>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="text_nombre" className="form-label">Nombre</label>
                                                <input type="text" className="form-control" id="text_nombre" aria-describedby="emailHelp" />
                                                
                                                <label for="text_apellido" className="form-label">Apellido</label>
                                                <input type="text" className="form-control" id="text_apellido" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            
                                            <div className="block10 layout">
                                                
                                                <button type="submit" className="btn btn-outline-danger espacio">Crear cuenta</button>
                                                    
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
