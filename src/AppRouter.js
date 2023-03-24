import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;