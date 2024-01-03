import { useState, useEffect } from 'react';

const useCookieConsent = () => {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const userConsent = localStorage.getItem('cookieConsent') === 'true';
        setConsent(userConsent);
    }, []);

    const giveConsent = () => {
        localStorage.setItem('cookieConsent', 'true');
        setConsent(true);
    };

    return [consent, giveConsent];
};

export default useCookieConsent;
