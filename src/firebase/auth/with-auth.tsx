'use client';
import { useUser } from './use-user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../';
import { Skeleton } from '@/components/ui/skeleton';

export function WithAuth({
  children,
  LoadingComponent,
}: {
  children: React.ReactNode;
  LoadingComponent?: React.ReactNode;
}) {
  const user = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth && !user) {
      router.push('/login');
    }
  }, [user, auth, router]);

  if (!user) {
    return LoadingComponent || <AuthSceleton/>;
  }

  return <>{children}</>;
}


function AuthSceleton() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-5 w-64 mt-2" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </div>
  )
}
