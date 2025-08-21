import '../styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Notion Next.js blog',
  description: 'Notion Next.js blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img
          src="/Header.png"
          alt="ヘッダー画像"
          style={{
            width: '450px',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            margin: '2rem auto',
          }}
        />
        {children}
      </body>
    </html>
  );
}
