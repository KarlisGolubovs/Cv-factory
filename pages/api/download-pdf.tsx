import puppeteer from 'puppeteer';
import { NextApiRequest, NextApiResponse } from 'next';

const generatePDF = async (htmlContent: string): Promise<Buffer> => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    const styleContent = `
    <style>
      body {
        padding: 24px;
        font-family: 'Roboto', sans-serif;
      }
      .pdf-content {
        color: black;
      }
      .name {
        font-size: 30px;
        font-weight: bold;
      }
      .title {
        font-size: 20px;
        margin-top: -35px;
      }
      .work-experience {
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 6px;
      }
      .education {
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 6px;
      }
      .job {
        margin-left: 30px;
        margin-top: -15px;
      }
      .company {
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 4px;
      }
      .job-title {
        justify-content: space-between;
      }
      .email {
        display: flex;
        align-items: center;

      }
      .phone {
        display: flex;
        align-items: center;
      }
      .website {
        display: flex;
        align-items: center;
      }
      .location {
        display: flex;
        align-items: center;
      }
      .contact-info {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        justify-content: space-between;
      }
    </style>
  `;

    const contentWithStyle = styleContent + htmlContent;

    await page.setContent(contentWithStyle, { waitUntil: 'networkidle2' });

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdfBuffer;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { pdfContent } = req.body;

    try {
        const pdfBuffer = await generatePDF(pdfContent);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=downloaded_resume.pdf'
        );
        res.status(200).send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).end();
    }
};
