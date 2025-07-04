import { useUser } from '@clerk/clerk-react';
import type { ReactNode } from 'react';

interface RoleBasedAccessProps {
  children: ReactNode;
  allowedRoles: string[];
  fallback?: ReactNode;
}

const RoleBasedAccess = ({ children, allowedRoles, fallback }: RoleBasedAccessProps) => {
  const { user } = useUser();
  
  // Get user's public metadata for roles
  const userRoles = user?.publicMetadata?.roles as string[] || [];
  
  // Check if user has any of the allowed roles
  const hasAccess = allowedRoles.some(role => userRoles.includes(role));
  
  if (!hasAccess) {
    return fallback || (
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem',
        color: '#6b7280'
      }}>
        <h3>Access Restricted</h3>
        <p>You don't have permission to view this content.</p>
      </div>
    );
  }
  
  return <>{children}</>;
};

export default RoleBasedAccess; 