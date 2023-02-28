import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await client.user.findMany({
    where: {
      id: 6,
    },
  });
  console.log(user);

  res.json({
    ok: true,
    data: "xx",
  });
}
