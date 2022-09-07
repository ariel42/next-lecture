// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type User = { id: number, name: string } | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const result = await Promise.resolve([
    { id: 1, name: 'Ariel', phone: '054-3142000' },
    { id: 2, name: 'Renana', phone: '054-8198861' }
  ].find(user => user.id === +(req.query?.id || 0))) || null;
  
  console.log(result)
  res.status(200).json(result);
}
