// route handler with secret and slug
import { isString } from '@/utils/TypeGuardUtils';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';

export async function GET(request: Request) {
  const SECRET_KEY = process.env.SECRET_KEY ?? '';

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const draftKey = searchParams.get('draftKey');

  if (secret !== SECRET_KEY || !slug || !isString(draftKey)) {
    return new Response('Invalid token', { status: 401 });
  }

  const post = await microCMSClient.blogs
    ._id(slug)
    .$get({ query: { draftKey } });

  if (!post) {
    return new Response('Invalid slug', { status: 401 });
  }

  draftMode().enable();
  const urlSearchParams = new URLSearchParams({ draftKey });

  redirect(`/blogs/${post.id}?${urlSearchParams}`);
}
