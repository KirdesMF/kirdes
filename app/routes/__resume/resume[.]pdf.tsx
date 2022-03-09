import { renderToStream } from '@react-pdf/renderer';
import { PDFResume } from '~/components/resume-pdf';

export const loader = async () => {
  const pdfStream = await renderToStream(<PDFResume />);

  const body: Buffer = await new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    pdfStream.on('data', (chunk) => chunks.push(chunk));
    pdfStream.on('end', () => resolve(Buffer.concat(chunks)));
    pdfStream.on('error', reject);
  });

  const headers = new Headers({
    'Content-Type': 'application/pdf',
    'Cache-control': 'max-age=60, public',
  });
  return new Response(body, { status: 200, headers });
};
