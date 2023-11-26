import { isString } from '@/utils/TypeGuardUtils';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';

export async function GET(request: Request) {
  const SECRET_KEY = process.env.SECRET_KEY ?? '';
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const draftKey = searchParams.get('draftKey');
  const secret = searchParams.get('secret');

  if (secret !== SECRET_KEY || !id || !isString(draftKey)) {
    return new Response('Invalid token', { status: 401 });
  }

  const blog = await microCMSClient.blogs._id(id).$get({ query: { draftKey } });

  if (!blog) {
    return new Response('Invalid slug', { status: 401 });
  }

  draftMode().enable();
  const urlSearchParams = new URLSearchParams({ draftKey });

  redirect(`/blogs/${blog.id}?${urlSearchParams}`);
}
