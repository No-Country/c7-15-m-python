import React, {} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginP from '../auth/LoginP'
import CrearCuenta from '../auth/CrearCuenta'
import Home from "../home/Home"

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginP />} />
                <Route path="/creacuenta" element={<CrearCuenta />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    </div>
  )
}
