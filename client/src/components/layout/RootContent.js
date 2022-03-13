import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
function RootContent() {
    return (
        <Routes>
            {routes.map((value, index) => (
                <Route key={index} path={value.path} end={value.exact} element={value.component} />
            ))}
        </Routes>
    );
}

export default RootContent;
