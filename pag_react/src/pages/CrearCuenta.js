import React from 'react'
import {Link} from 'react-router-dom'

export default function CrearCuenta() {
  return (
    <React.Fragment>
                    <div class="flex layout">
                        <div class="block14 layout">
                            <div class="block15 layout">
                                <div class="block15__item">
                                    <a href="#"><img src="../assets/img/KeComer.png" alt="" class="icon1 layout" /></a>
                                </div>
                                <div class="spacer block15__spacer"></div>
                                <h5 class="highlights3 layout">KE COMER</h5>
                            </div>
                        </div>
                        <div class="block1 layout">
                            <div class="block2 layout">
                                <div class="block3 layout">
                                    <div>
                                        <h1 class="hero_title layout">Crear Cuenta</h1>
                                        <div>
                                            <h3 class="highlights layout">¿Ya tenés cuenta?  <Link to="/" classNameName="crea_cuenta"> Iniciar sesión</Link></h3>
                                        <div>
                                    </div>

                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="text_nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="text_nombre" aria-describedby="emailHelp" />
                                                
                                                <label for="text_apellido" class="form-label">Apellido</label>
                                                <input type="text" class="form-control" id="text_apellido" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                            </div>
                                            
                                            <div class="block10 layout">
                                                
                                                <button type="submit" class="btn btn-outline-danger espacio">Crear cuenta</button>
                                                    
                                                <button type="button" class="btn btn-outline-secondary espacio"><img src="../assets/img/44d99b5c0ac21f42e4480177f374344a.png" alt="" width="20"/>Ingresar con Google</button>
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
