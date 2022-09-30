import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginP from './LoginP'
import CrearCuenta from "./CrearCuenta"

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginP />} />
                <Route path="/creacuenta" element={<CrearCuenta />} />
            </Routes>
        </Router>
    </div>
  )
}
