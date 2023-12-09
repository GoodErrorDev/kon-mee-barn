import React from "react";
import './header.css';
const { useLayoutEffect, useEffect, useState, useRef, useCallback } = React;
const HeaderComponent = () => {
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader(50);
    const headerClasses = `navbar bg-base-100 header-style-custom header ${(sticky && check) ? 'sticky' : ''}`

    return (
        <>
            <div ref={ref} className={headerClasses}>
                <div className="flex-1">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="src/assets/logo.jpg" />
                        </div>
                    </div>
                    <span className="ms-2 text-xl text-black">
                        KON MEE BARN
                    </span> 
                    <div className="ms-10">
                        <a className="link link-hover">ชื้อ</a>
                        <a className="link link-hover ms-6">เช่า</a>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};


function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);
    const [yaxis, setYaxis] = useState(0);

    const handleScroll = useCallback((e) => {
        if (yaxis > window.scrollY) {
            setStick(true);
        } else if (yaxis < window.scrollY) {
            setStick(false);
        }
        setYaxis(window.scrollY)
    });

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });
    });

    return stick;
}


export default HeaderComponent;