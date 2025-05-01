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
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img
            src="/Header.png"
            alt="Header"
            style={{
              maxWidth: '100%',
              height: '140px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
