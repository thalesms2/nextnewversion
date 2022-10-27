import React from "react";
import { Roboto } from "@next/font/google";

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
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
