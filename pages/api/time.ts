// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  time: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query?.update === 'true') {
    console.log('revalidating time by api');
    res.revalidate('/ssg');
  }
  const result = await Promise.resolve({ time: new Date().toLocaleTimeString() });
  
  console.log(result)
  res.status(200).json(result);
}
