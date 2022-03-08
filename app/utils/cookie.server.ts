import { createCookie } from 'remix';

export const setCookieTheme = createCookie('theme', {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
});

export const getCookieTheme = async (req: Request) => {
  const cookie = req.headers.get('Cookie');
  const parsedCookie = (await setCookieTheme.parse(cookie)) as {
    theme: 'light' | 'dark';
  };
  return parsedCookie || { theme: 'light' };
};
