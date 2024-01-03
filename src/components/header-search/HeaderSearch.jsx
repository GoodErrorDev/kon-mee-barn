import React from "react";
import './HeaderSearch.css';
import DateRangePicker from "../dateRangePicker/DateRangePicker";
const { useLayoutEffect, useEffect, useState, useRef, useCallback } = React;

function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);
    const [yaxis, setYaxis] = useState(50);

    const handleScroll = useCallback((e) => {
        // console.log(yaxis);
        if (yaxis > 100) {
            setStick(true);
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



const HeaderSearchComponent = () => {
    const ref = useRef();
    const sticky = useStickyHeader(50);
    const headerClasses = `navbar bg-base-100  header-style-custom ${(sticky) ? 'sticky' : ''}`

    return (
        <>
            <div ref={ref} className={headerClasses}>
                <div className="filter-search"> 
                    <div className="flex gap-2 justify-items-center">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="form-control">
                            <DateRangePicker />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HeaderSearchComponent;