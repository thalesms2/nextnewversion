import React from "react";
import { Roboto, Montserrat } from "@next/font/google";
import './globals.css'
import Nav from './Nav'

interface RootLayoutProps {
    children: React.ReactNode;
}

// const roboto = Roboto({
//     weight: "400",
//     subsets: ["latin"],
// });

// const montserrat = Montserrat({ subsets: ["latin"] })

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        // <html lang="pt" className={montserrat.className}>
        <html lang="pt">
            <body>
                <Nav />
                {children}    
            </body>
        </html>
    );
};

export default RootLayout;
