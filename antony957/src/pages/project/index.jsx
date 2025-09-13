import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PersonalHome from '../../components/personal/PersonalHome.jsx'
import EarlyExitDefender from '../../components/project/EarlyExitDefender.jsx'
import '../../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EarlyExitDefender />
    </React.StrictMode>
)