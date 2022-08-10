import React from "react";
import {Routes, Route} from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';
import ErrorPage from "./pages/error_page";

function App() {
    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detalles" element={<Details/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>

    );
}

export default App;
