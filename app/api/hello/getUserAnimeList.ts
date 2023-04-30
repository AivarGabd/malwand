// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const access_token = req.body;


    fetch('https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=50', {
        headers: {
            'Authorization': 'Bearer ' + access_token.toString()
        }
    })
        .then((res) => res.json())
        .then((data) => {
            res.status(200).json(data);
        })
}
