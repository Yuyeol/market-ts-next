import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const user = await client.user.upsert({
    where: { email },
    create: { email, name: "xx" },
    update: {},
  });
  res.json({
    ok: true,
    data: "xx",
  });
}

export default withHandler("POST", handler);
