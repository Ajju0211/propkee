'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace(
      '/blogs/cost-of-living-in-uae-2025-rent-utilities-food-and-travel-propkee',
    );
  }, []);
  return <div className="h-full w-screen bg-white"></div>;
}
