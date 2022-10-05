import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
            <div>
                <header>
                <nav>
                    
                    <div className="block15__item">
                        <Link to="/"><img src="../assets/img/logoPpal.png" alt="" /></Link>
                        
                   </div>
                    
                    <div className="url">
                        <ul>
                            <li>
                                <label for="carnes">Carnes <img src="../assets/img/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="vegetales">Vegetales <img src="../assets/img/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="condimientos">Codimentos <img src="../assets/img/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="categoria">Mas Categorias <img src="../assets/img/flecha-abajo.svg" /></label>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <Link to="/login"><button type="button" className="btn btn-outline-danger btn-sm ">Ingresar</button></Link>
                        <Link to="/creacuenta"><button type="button" className="btn btn-danger btn-sm btn-sm espacio">Crea tu Cuenta</button></Link>
                        <Link to="/apiconsume"><button type="button" class="btn btn-warning">Api</button></Link>
                    </div>
                </nav>
            </header>
            <main>
                <p>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                </p>
                <div className="category">
                    <div className="divCategory">
                        <img src="../assets/img/carnes.png" />
                        <span>Carnes</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/verduras.png" />
                        <span>Vegetales</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/frutas.png" />
                        <span>Frutas</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/lacteos.png" />
                        <span>Lateos</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/especias.png" />
                        <span>Condimentos</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/bebidas.png" />
                        <span>Bebidas</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/harinas-y-granos.png" />
                        <span>Harinas y granos</span>
                    </div>
                    <div className="divCategory">
                        <img src="../assets/img/grasas.png" />
                        <span>Grasas y aceites</span>
                    </div>
                </div>
                <div className="barraBusqueda">
                    <div className="input">
                        <img src="../assets/img/lupa.svg" />
                        <input type="text" placeholder="Ingresar ingredientes" />
                    </div>
                    <a href="#"><button className="btn3"><img src="../assets/img/mas0112483-jv7a.svg" />
                            Agregar</button></a>
                    <a href="#"><button className="btn4">Buscar receta</button></a>
                </div>
            </main>
        </div>
    </React.Fragment>
  )
}
