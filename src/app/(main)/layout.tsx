import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '40px 0', marginTop: '80px' }}>
        <div className="container flex justify-between items-center text-xs text-muted">
          <div className="flex gap-md">
            <Link href="/about">About</Link>
            <Link href="/help">Help</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
          <span>© 2024 Medium Clone</span>
        </div>
      </footer>
    </div>
  );
}
