import { SignedIn, SignedOut } from '@clerk/clerk-react';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#475569', marginBottom: '1rem' }}>Access Denied</h2>
            <p style={{ color: '#6b7280' }}>Please sign in to access this page.</p>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default ProtectedRoute; 