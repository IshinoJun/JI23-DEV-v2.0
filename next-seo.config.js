// eslint-disable-next-line import/no-anonymous-default-export
export default {
  titleTemplate: '%s | JI23-DEV',
  defaultTitle: 'JI23-DEV',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'JI23',
    },
  ],
  openGraph: {
    type: 'article',
    locale: 'ja_JP',
    site_name: 'JI23-DEV',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/ogp.png`,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/icon.png',
    },
  ],
};
