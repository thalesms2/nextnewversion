import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await prisma.product.findMany({
        orderBy: {
            updatedAt: "desc",
        },
    });
    res.json(result);
}
