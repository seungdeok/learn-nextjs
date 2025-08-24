import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/");
    return res.json({ success: true });
  } catch (error: unknown) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
}
