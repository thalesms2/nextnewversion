import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, price } = req.body
    const result = await prisma.product.create({
        data: { 
            name: name,
            price: price
        },
    })
    res.json(result)
    
}