import { createCookie } from 'remix';

export const setCookieTheme = createCookie('theme', {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24 * 365, // 1 year
});

export const getCookieTheme = async (req: Request) => {
  const cookie = req.headers.get('Cookie');
  const parsedCookie = (await setCookieTheme.parse(cookie)) as {
    theme: 'light' | 'dark';
  };
  return parsedCookie || { theme: '' };
};
