import React from "react";
import { Roboto } from "@next/font/google";
import "styles/globals.css";
import Nav from "components/Nav";

interface RootLayoutProps {
    children: React.ReactNode;
}

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="pt" className={roboto.className}>
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
