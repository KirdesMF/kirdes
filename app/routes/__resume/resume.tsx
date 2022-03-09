import { Link } from 'remix';

export default function Resume() {
  return (
    <main className="min-h-[100vh] wrapper">
      <h1>Resume</h1>
      <iframe
        width="100%"
        height="100%"
        src="/resume.pdf"
        title="test"
      ></iframe>
      <Link to="/">Home</Link>
    </main>
  );
}
