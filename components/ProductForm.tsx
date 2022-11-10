"use client";

import {useRouter} from "next/navigation";
import React from "react";

const ProductForm = () => {
    const [name, setName] = React.useState<string>("");
    const [price, setPrice] = React.useState<number>(0);
    const router = useRouter()
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { name, price };
            await fetch(`api/product`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            await router.refresh()
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <input type="submit" value="Create" />
        </form>
    );
};

export default ProductForm;
