'use client';

import { useSectionReady } from '@/hooks/useSectionReady';
import { FooterSkeleton } from '@/components/skeletons/SectionSkeletons';

export default function Footer() {
  const ready = useSectionReady(200);

  if (!ready) {
    return <FooterSkeleton />;
  }

  return (
    <footer
      className="border-t border-purple-200 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center sm:px-8"
      style={{ backgroundColor: '#FFF8F0' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-600 mb-2">
          © 2024 Rryu Developer. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with React, Next.js, and lots of ☕
        </p>
      </div>
    </footer>
  );
}
