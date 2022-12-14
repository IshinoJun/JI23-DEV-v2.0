import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { isString } from '@/utils/TypeGuardUtils';
import { Canvas, createCanvas, loadImage, registerFont } from 'canvas';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import * as path from 'path';

interface SeparatedText {
  line: string;
  remaining: string;
}

const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
  const context = canvas.getContext('2d');
  const MAX_WIDTH = 1000 as const;

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1);

    if (context.measureText(line).width > MAX_WIDTH) {
      return {
        line,
        remaining: text.substring(i + 1),
      };
    }
  }

  return {
    line: text,
    remaining: '',
  };
};

const createTextLines = (canvas: Canvas, text: string): string[] => {
  const lines: string[] = [];
  let currentText = text;

  while (currentText !== '') {
    const separatedText = createTextLine(canvas, currentText);
    lines.push(separatedText.line);
    currentText = separatedText.remaining;
  }

  return lines;
};

const createOgp: NextApiHandler<Response> = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (!isString(req.query.id)) {
    return res.status(404).end();
  }
  const { id } = req.query;
  const blog = await microCMSClient.blogs._id(id).$get();

  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const context = canvas.getContext('2d');

  registerFont(path.resolve('./fonts/inter.ttf'), {
    family: 'inter',
  });

  registerFont(path.resolve('./fonts/noto-sans-jp.otf'), {
    family: 'Noto Sans JP',
  });

  const backgroundImage = await loadImage(
    path.resolve('./public/ogpBackground.png'),
  );

  context.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);
  context.font = '60px inter Noto Sans JP';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  const lines = createTextLines(canvas, blog.title);
  lines.forEach((line, index) => {
    const y = 314 + 80 * (index - (lines.length - 1) / 2);
    context.fillText(line, 600, y);
  });
  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  });

  return res.end(buffer, 'binary');
};

export default createOgp;
