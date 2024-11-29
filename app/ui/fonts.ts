import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Playfair_Display({ subsets: ['latin'], weight: ['400', '900'], display: 'swap' });

export const myFont = localFont({
  src: './fonts/SF-Pro-Display-Bold.otf',
  display: 'swap',
});
