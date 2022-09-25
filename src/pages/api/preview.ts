import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { isString } from '@/utils/TypeGuardUtils';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const preview: NextApiHandler<Response> = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const SECRET_KEY = process.env.SECRET_KEY ?? '';

  const { id, draftKey, secret } = req.query;

  if (secret !== SECRET_KEY || !isString(id) || !isString(draftKey)) {
    return res.status(401).json({
      message: `Invalid query`,
    });
  }

  const blog = await microCMSClient.blogs._id(id).$get({ query: { draftKey } });

  if (!blog) return res.status(401).json({ message: 'Invalid draft key' });

  res.setPreviewData({
    draftKey: req.query.draftKey,
    id: req.query.id,
  });

  res.writeHead(307, { Location: `/blogs/${id}` });

  return res.end('Preview mode enabled');
};

export default preview;
