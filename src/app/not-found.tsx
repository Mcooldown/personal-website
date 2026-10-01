import Link from "next/link";
import "./globals.scss"; // Assuming this might be needed, or global styles are handled in layout
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Vincent Hadinata",
};

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBECEF', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '72px', color: '#313B6B', margin: '0 0 16px', fontFamily: 'Montserrat-Black' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#505050', margin: '0 0 32px' }}>Oops! The page you're looking for doesn't exist.</h2>
      <Link href="/" style={{ backgroundColor: '#313B6B', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
        Back to Home
      </Link>
    </main>
  );
}
