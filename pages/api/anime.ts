import { NextApiRequest, NextApiResponse } from "next";
import { prismaClient } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { animeTitle } = req.body
    const anime = await prismaClient.anime.create({
        data: { title: animeTitle }
    })
}

