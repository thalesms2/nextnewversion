import React from 'react'

async function getData() {
    const res = await fetch("https://animechan.vercel.app/api/random")
    return res.json();
}

async function getDataByTitle(input: string) {
    const title = input.replaceAll(' ', '&')
    const res = await fetch(`https://animechan.vercel.app/api/random/anime?title=${title}`)
    return res.json()
}

export default async function  AnimeFetch(){
    // const anime = await getData();
    const anime = await getDataByTitle('demon slayer')
    return (
        <div>
            <h2>{anime.anime}</h2>
            <span>{anime.character}</span>
            <p>{anime.quote}</p>
        </div>
    );
}

