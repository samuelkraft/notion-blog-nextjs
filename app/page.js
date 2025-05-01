import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import Text from '../components/text';
import styles from './index.module.css';

export const databaseId = process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Page() {
  const posts = (await getPosts()).filter(
    (post) => post.properties?.Published?.checkbox === true
  );

  const groupedPosts = posts.reduce((acc, post) => {
    const category = post.properties?.Category?.select?.name;
    if (category) {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
    }
    return acc;
  }, {});
  return (
    <div>
      <main className={styles.container}>
        <header className={styles.header}>
          {/* logos removed */}
          <div style={{ textAlign: 'center' }}>
            <h1>Y's Magazine - IT Knowledge Base</h1>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p>
              こんにちは、YUTOです。<br />
              <br />
              SAPコンサルタントとしてIT業界で働く傍ら、<br />
              副業でWebアプリの開発やナレッジ発信にも力を入れています。<br />
              <br />
              技術とビジネスの両面から課題解決に取り組み、<br />
              常に「仕組みで価値を生み出す」ことをテーマに活動しています。<br />
              <br />
              このブログでは、ITスキルの習得、キャリア形成、副業のリアルな実践知など、<br />
              未来を切り拓くためのヒントをお届けします。
            </p>
          </div>
        </header>

        {Object.entries(groupedPosts).map(([tag, posts]) => (
          <details key={tag} className={styles.categorySection} open>
            <summary className={styles.heading}>{tag}</summary>
            <ol className={styles.posts}>
              {posts.map((post) => {
                const date = new Date(post.last_edited_time).toLocaleString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                });
                const slug = post.properties?.Slug?.rich_text[0].text.content;
                return (
                  <li key={post.id} className={styles.post}>
                    <h3 className={styles.postTitle}>
                      <Link href={`/article/${slug}`}>
                        <Text title={post.properties?.Title?.title} />
                      </Link>
                    </h3>
                    <p className={styles.postDescription}>{date}</p>
                    <Link href={`/article/${slug}`}>Read post →</Link>
                  </li>
                );
              })}
            </ol>
          </details>
        ))}
      </main>
    </div>
  );
}
