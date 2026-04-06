'use client';

import { Skeleton } from '@/components/Skeleton';

export function NavbarSkeleton() {
  return (
    <div className="fixed top-[max(0.75rem,env(safe-area-inset-top))] left-1/2 z-50 w-[min(100vw-0.75rem,42rem)] max-w-[calc(100vw-0.75rem)] -translate-x-1/2 px-1">
      <Skeleton className="h-14 w-full rounded-full border border-purple-200/50" />
    </div>
  );
}

export function HeroSkeleton({ id = 'home' }: { id?: string }) {
  return (
    <section
      id={id}
      className="min-h-dvh flex items-center justify-center relative overflow-hidden px-4 pb-8 pt-20 sm:px-8 sm:pb-0 sm:pt-0"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none">
        <Skeleton className="h-full min-h-[320px] w-full rounded-2xl opacity-80" />
      </div>
      <div className="relative z-10 text-center max-w-6xl w-full space-y-6">
        <Skeleton className="h-14 md:h-20 w-4/5 max-w-2xl mx-auto rounded-lg" />
        <Skeleton className="h-10 md:h-12 w-3/5 max-w-xl mx-auto rounded-lg" />
        <div className="space-y-3 max-w-3xl mx-auto">
          <Skeleton className="h-5 w-full rounded" />
          <Skeleton className="h-5 w-full rounded" />
          <Skeleton className="h-5 w-4/5 mx-auto rounded" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Skeleton className="h-14 w-44 rounded-full mx-auto sm:mx-0" />
          <Skeleton className="h-14 w-44 rounded-full mx-auto sm:mx-0" />
        </div>
        <div className="flex justify-center gap-4 pt-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-12 w-12 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton({ id = 'about' }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-56 mx-auto rounded-lg" />
          <Skeleton className="h-1 w-20 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4 rounded" />
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-4 w-full rounded" />
            ))}
            <Skeleton className="h-5 w-48 rounded mt-6" />
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-9 w-24 rounded-full" />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-8 w-1/2 rounded" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-32 rounded" />
                  <Skeleton className="h-4 w-10 rounded" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-16 mx-auto rounded" />
              <Skeleton className="h-4 w-28 mx-auto rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperiencesSkeleton({ id = 'experiences' }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-8" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-80 mx-auto rounded-lg" />
          <Skeleton className="h-1 w-20 mx-auto rounded-full" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded" />
        </div>
        <div className="relative space-y-12 pl-4 md:pl-0">
          <Skeleton className="absolute left-1/2 -translate-x-1/2 w-1 h-full min-h-[400px] rounded-full hidden md:block top-0" />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`relative md:w-5/12 ${i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}
            >
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton({ id = 'projects' }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-72 mx-auto rounded-lg" />
          <Skeleton className="h-1 w-20 mx-auto rounded-full" />
          <Skeleton className="h-5 w-full max-w-xl mx-auto rounded" />
          <div className="flex justify-center flex-wrap gap-3 pt-4">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-full" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-2xl border border-purple-100 overflow-hidden bg-white shadow-xl">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-4/5 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Skeleton className="h-12 w-64 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton({ id = 'contacts' }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-8" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-64 mx-auto rounded-lg" />
          <Skeleton className="h-1 w-20 mx-auto rounded-full" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <Skeleton className="h-8 w-48 rounded" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            ))}
            <Skeleton className="h-14 w-full rounded-lg mt-2" />
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
              <Skeleton className="h-8 w-56 rounded" />
              {[0, 1, 2].map((i) => (
                <Skeleton key={i} className="h-20 w-full rounded-xl" />
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
              <Skeleton className="h-8 w-48 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <div className="flex gap-4">
                {[0, 1, 2].map((i) => (
                  <Skeleton key={i} className="h-14 w-14 rounded-full" />
                ))}
              </div>
            </div>
            <Skeleton className="h-40 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSkeleton() {
  return (
    <footer
      className="py-8 px-8 text-center border-t border-purple-200"
      style={{ backgroundColor: '#FFF8F0' }}
    >
      <div className="max-w-6xl mx-auto space-y-3">
        <Skeleton className="h-5 w-64 mx-auto rounded" />
        <Skeleton className="h-4 w-80 mx-auto rounded" />
      </div>
    </footer>
  );
}
