import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <header>
          <Image
            src="/Header.png"
            alt="ブログのヘッダー画像"
            width={660}
            height={140}
            style={{ margin: '0 auto', display: 'block', objectFit: 'contain' }}
            priority,
          />
          <p>
            こんにちは、YUTOです。
            <br />
            <br />
            SAPコンサルタントとしてIT業界で働く傍ら、
            <br />
            副業でWebアプリの開発やナレッジ発信にも力を入れています。
            <br />
            <br />
            技術とビジネスの両面から課題解決に取り組み、
            <br />
            常に「仕組みで価値を生み出す」ことをテーマに活動しています。
            <br />
            <br />
            このブログでは、ITスキルの習得、キャリア形成、副業のリアルな実践知など、
            <br />
            未来を切り拓くためのヒントをお届けします。
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
