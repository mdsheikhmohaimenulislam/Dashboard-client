import React from 'react';
import { Outlet } from 'react-router';

const LayOut = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;