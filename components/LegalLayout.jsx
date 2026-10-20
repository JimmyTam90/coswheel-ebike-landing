import Link from 'next/link';

export default function LegalLayout({ title, updated = 'October 20, 2026', children }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-amber-400 hover:underline">← Back to the COSWHEEL guide</Link>
      <h1 className="mt-4 text-3xl font-extrabold text-white">{title}</h1>
      <p className="mt-1 text-sm text-slate-400">Last updated: {updated}</p>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">{children}</div>
    </article>
  );
}
