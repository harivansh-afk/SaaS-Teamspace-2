'use client';

import dynamic from 'next/dynamic';

// Use dynamic import with ssr: false to avoid hydration issues
const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
});

const Sidebar = dynamic(() => import('@/components/layout/Sidebar'), {
  ssr: false,
});

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">
          <div className="px-4 py-8 md:px-16">
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
}
