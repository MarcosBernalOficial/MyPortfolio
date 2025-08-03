import { useState, useEffect } from 'react';

import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SplashScreen from '../components/SplashScreen';

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2100);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <div className="min-h-screen pb-20 min-w-screen bg-white dark:bg-black overflow-x-hidden">
            < Nav />
            < Dashboard />
            < Footer />
        </div>
    )
}