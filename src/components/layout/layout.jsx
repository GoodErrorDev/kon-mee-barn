import React from 'react'
import { Outlet } from "react-router-dom";
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';
import CookieConsent from '../cookie/CookieConsent';
import './layout.css'
import HeaderSearchComponent from '../header-search/HeaderSearch';
export default function Layout() {
    return (
        <>
            <HeaderComponent />
            <HeaderSearchComponent />
            <Outlet />
            <FooterComponent />
            <div className="cookies-layout">
                <CookieConsent />
            </div>

        </>
    )
}
