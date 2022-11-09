import React from "react";
import type { NextPage } from 'next'
import styles from "styles/Home.module.css";
import prisma from 'lib/prisma';

const Home: NextPage = () => {
    return (
        <div className={styles.content}>
            Hello World!
        </div>
    );
}

export default Home;

