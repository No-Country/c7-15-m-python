import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
            <div>
                <header>
                <nav>
                    <div class="logo">
                        <img src="./asset/image/imagenLogo.svg" />
                        <h1>KE COMER</h1>
                    </div>
                    <div class="url">
                        <ul>
                            <li>
                                <label for="carnes">Carnes <img src="./asset/image/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="vegetales">Vegetales <img src="./asset/image/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="condimientos">Codimentos <img src="./asset/image/flecha-abajo.svg" /></label>
                            </li>
                            <li>
                                <label for="categoria">Mas Categorias <img src="./asset/image/flecha-abajo.svg" /></label>
                            </li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="../login/web/login.html"><button class="btn1">Ingresar</button></a>
                        <a href="../login/web/crear_cuenta.html"><button class="btn2">Crea tu Cuenta</button></a>
                    </div>
                </nav>
            </header>
            <main>
                <p>¡Hola! Ingresa los ingredientes y te <br /> decimos qué podes preparar <br /> <span>Podes ingresar hasta 5
                        ingredientes</span>
                </p>
                <div class="category">
                    <div class="divCategory">
                        <img src="./asset/image/carnes.png" />
                        <span>Carnes</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/verduras.png" />
                        <span>Vegetales</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/frutas.png" />
                        <span>Frutas</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/lacteos.png" />
                        <span>Lateos</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/especias.png" />
                        <span>Condimentos</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/bebidas.png" />
                        <span>Bebidas</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/harinas-y-granos.png" />
                        <span>Harinas y granos</span>
                    </div>
                    <div class="divCategory">
                        <img src="./asset/image/grasas.png" />
                        <span>Grasas y aceites</span>
                    </div>
                </div>
                <div class="barraBusqueda">
                    <div class="input">
                        <img src="./asset/image/lupa.svg" />
                        <input type="text" placeholder="Ingresar ingredientes" />
                    </div>
                    <a href="#"><button class="btn3"><img src="./asset/image/mas0112483-jv7a.svg" />
                            Agregar</button></a>
                    <a href="#"><button class="btn4">Buscar receta</button></a>
                </div>
            </main>
        </div>
    </React.Fragment>
  )
}
