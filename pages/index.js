
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Still Learning</h1>
      <p>A site to learn and grow, one step at a time.</p>
      <Link href="/daily"><button style={{ margin: '0.5rem' }}>Daily Read</button></Link>
      <Link href="/about"><button style={{ margin: '0.5rem' }}>About</button></Link>
    </div>
  );
}
