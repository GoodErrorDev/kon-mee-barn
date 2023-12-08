import React from 'react'
import { Outlet } from "react-router-dom";
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';

export default function Layout() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}
