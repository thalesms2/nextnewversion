import React from "react";
import styles from "styles/Home.module.css";
import ProductForm from "@/components/ProductForm";
import prisma from "@/lib/prisma";

async function getProducts() {
    return await prisma.product.findMany({
        orderBy: {
            updatedAt: "desc"
        }
    })
}

const Home = async () => {
    const products = await getProducts()
    return (
        <div className={styles.content}>
            <ProductForm  />
            {products.map((product) => {
                return (
                    <div key={product.id}>{`${product.id} | ${product.name} $${product.price} - ${product.updatedAt}`}</div>
                )
            })}
        </div>
    );
};

export default Home;
