"use client"

import React from 'react'
import type { NextPage } from 'next'

async function createAnime(title: string) {
    await fetch("/api/anime", {
        method: "POST",
        body: JSON.stringify(title),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const Form: NextPage = () => {
    const [title, setTitle] = React.useState<string>('');
    const handleSubmit = (e) => {
        e.preventDefault();
        createAnime(title)
    };
    return (
        <div>
            <input
                    type="text"
                    placeholder="anime title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span>{title}</span>
                <button onSubmit={(e) => handleSubmit(e)}>test</button>
        </div>
    )
}

export default Form