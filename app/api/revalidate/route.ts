import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from "next"



const secret = process.env.SANITY_WEBHOOK_SECRET || ""

export async function POST(req: any, res:any) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] || "";
  const sign = typeof signature === "string" ? signature : signature[0];
  const body = await req.json()
  const isValid = isValidSignature(JSON.stringify(body), sign, secret);
  const pathToRevalidate = body.slug.current;


  try {

    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);

    return res.json({ revalidated: true });
  } catch (err) {
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    return new Response("Err signature:", pathToRevalidate);

  }
}
