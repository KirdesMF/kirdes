import { Link } from 'remix';

export default function Resume() {
  return (
    <main className="min-h-100vh wrapper grid gap-y-2xl">
      <h1>Resume</h1>
      <Link to="/">Home</Link>

      <iframe
        className="min-h-100vh"
        width="100%"
        height="100%"
        src="/resume.pdf"
        title="test"
      ></iframe>
    </main>
  );
}
