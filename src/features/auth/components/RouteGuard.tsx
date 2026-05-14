'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, checkAuth } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      setIsChecking(false);
    };
    initAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isChecking && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isChecking, router]);

  if (isChecking) {
    return (
      <div className="container flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, checkAuth } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      setIsChecking(false);
    };
    initAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isChecking) {
      if (!isAuthenticated) {
        router.push('/auth/login');
      } else if (user?.role !== 'ADMIN') {
        router.push('/');
      }
    }
  }, [isAuthenticated, user, isChecking, router]);

  if (isChecking) {
    return (
      <div className="container flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="skeleton" style={{ width: '100px', height: '20px' }}></div>
      </div>
    );
  }

  return isAuthenticated && user?.role === 'ADMIN' ? <>{children}</> : null;
}
