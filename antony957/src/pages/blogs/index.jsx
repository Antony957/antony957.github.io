import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Route} from 'react-router-dom';

import '../../index.css'

import BlogHome from "../../components/blogs/BlogHome.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <BlogHome />
    </React.StrictMode>
)