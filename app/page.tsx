import React from "react";
import type { NextPage } from "next";
import styles from "styles/Home.module.css";
import Form from "./form";

const Home: NextPage = () => {
    return (
        <div className={styles.content}>
            <Form  />
        </div>
    );
};

export default Home;
