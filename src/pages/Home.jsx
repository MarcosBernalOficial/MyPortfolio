import { useState, useEffect } from 'react';

import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SplashScreen from '../components/SplashScreen';
import { AuroraBackground } from '../components/ui/aurora-background';

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
        <AuroraBackground className="pb-20">
            <Nav />
            <Dashboard />
            <Footer />
        </AuroraBackground>
    )
}