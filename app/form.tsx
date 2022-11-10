"use client"

import React from 'react'
import type { NextPage } from 'next'

async function createAnime(title: string) {
    const data = { title: title }
    await fetch("/api/anime", {
        method: "POST",
        body: JSON.stringify(data),
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
                <br />
                <span>{JSON.stringify(title)}</span>
                <br />
                <button onSubmit={(e) => handleSubmit(e)}>test</button>
        </div>
    )
}

export default Form