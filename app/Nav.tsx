import React from 'react'
import type { NextPage } from 'next'
import Link  from 'next/link'
import Image  from 'next/image'


const Nav: NextPage = () => {
    
    return (
        <nav>
            <Image 
                src="/pochita.png" 
                width={55}
                height={55}
                alt="Picture of the best caracter of animes" 
            />
            <Link href="/">Home</Link>
            <Link href="/tst">Teste</Link>
        </nav>
    )
}
export default Nav