'use client';

import { useRouter } from 'next/navigation';
import styles from './VerifyPage.module.css';

export default function VerifyPage() {
  const router = useRouter();

  const handleNavigate = () => {
    // Navigate to /quote with query parameters
    router.push('/quotes?id=123&source=verify');
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 sm:text-4xl">Verify page</h1>
      <p className="mb-6 text-base sm:text-lg max-w-2xl">
        This page is intended to verify that Redux state is persisted across page
        navigations.
      </p>
      <button
        onClick={handleNavigate}
        className="bg-blue-500 md:bg-red-500 text-white px-4 py-2 rounded-lg font-medium 
                   hover:bg-blue-600 transition-colors duration-200 
                   sm:px-6 sm:py-3 sm:text-lg 
                   w-full sm:w-auto"
      >
        Go to Quote Page
      </button>
    </>
  );
}