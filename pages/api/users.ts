// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Users = { id: number, name: string }[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Users>
) {
  const result = await Promise.resolve([
    { id: 1, name: 'Ariel' },
    { id: 2, name: 'Renana' }
  ]);
  
  console.log(result)
  res.status(200).json(result);
}
