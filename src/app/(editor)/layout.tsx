import { ProtectedRoute } from '@/features/auth/components/RouteGuard';

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </ProtectedRoute>
  );
}
