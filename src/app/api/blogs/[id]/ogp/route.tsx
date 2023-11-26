import { ImageResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://ji23-dev.com/ogpBackground.png)',
        }}
      >
        <div
          style={{
            marginLeft: 105,
            marginRight: 105,
            marginBottom: 105,
            fontSize: 60,
            letterSpacing: '-0.025em',
            color: 'black',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
