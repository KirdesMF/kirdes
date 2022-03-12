import { Link } from 'remix';

export default function Resume() {
  return (
    <main className="min-h-[100vh] wrapper">
      <h1>Resume ok ok</h1>
      <Link to="/">Home</Link>

      <iframe
        width="100%"
        height="100%"
        src="/resume.pdf"
        title="test"
      ></iframe>
    </main>
  );
}
