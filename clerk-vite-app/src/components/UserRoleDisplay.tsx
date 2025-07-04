import { useUser } from '@clerk/clerk-react';

const UserRoleDisplay = () => {
  const { user } = useUser();
  
  // Comprehensive logging of all user data
  console.log('=== COMPLETE USER DATA ===');
  console.log('User object:', user);
  console.log('User ID:', user?.id);
  console.log('User email:', user?.emailAddresses);
  console.log('User first name:', user?.firstName);
  console.log('User last name:', user?.lastName);
  console.log('User full name:', user?.fullName);
  console.log('User image URL:', user?.imageUrl);
  console.log('User created at:', user?.createdAt);
  console.log('User updated at:', user?.updatedAt);
  console.log('User last sign in:', user?.lastSignInAt);
  
  // Metadata logging
  console.log('=== METADATA ===');
  console.log('Public metadata:', user?.publicMetadata);
  console.log('Public metadata keys:', Object.keys(user?.publicMetadata || {}));
  console.log('Public metadata roles:', user?.publicMetadata?.roles);
  console.log('Public metadata type:', typeof user?.publicMetadata?.roles);
  
  // Get roles from multiple possible locations
  const publicRoles = user?.publicMetadata?.roles as string[] || [];
  const unsafeRoles = user?.unsafeMetadata?.roles as string[] || [];
  const userRoles = [...publicRoles, ...unsafeRoles];
  
  console.log('=== ROLES ANALYSIS ===');
  console.log('User roles array:', userRoles);
  console.log('User roles length:', userRoles.length);
  console.log('Is roles an array?', Array.isArray(userRoles));
  console.log('First role:', userRoles[0]);
  console.log('All roles:', userRoles);
  
  if (!userRoles.length) {
    console.log('=== NO ROLES FOUND ===');
    console.log('This means the user has no roles assigned in Clerk dashboard');
    console.log('Check Clerk dashboard -> Users -> Select user -> Public metadata');
    console.log('Add: {"roles": ["admin"]} or {"roles": ["stylist"]} or {"roles": ["client"]}');
    
    return (
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        color: '#6b7280',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: '0.875rem',
        fontWeight: '500',
        border: '1px solid rgba(107, 114, 128, 0.2)',
        zIndex: 1000
      }}>
        Role: Guest (No roles found)
      </div>
    );
  }

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'admin':
        return { 
          label: '👑 Admin', 
          color: '#16a34a', 
          bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
          permissions: ['Manage Users', 'View Reports', 'System Settings', 'Full Access']
        };
      case 'stylist':
        return { 
          label: '✂️ Stylist', 
          color: '#2563eb', 
          bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          permissions: ['View Schedule', 'Client List', 'Services', 'Appointments']
        };
      case 'client':
        return { 
          label: '💅 Client', 
          color: '#d97706', 
          bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          permissions: ['Book Appointments', 'View Services', 'Profile Management']
        };
      default:
        return { 
          label: role, 
          color: '#6b7280', 
          bg: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          permissions: ['Basic Access']
        };
    }
  };

  const primaryRole = userRoles[0]; // Show the first role
  const roleInfo = getRoleDisplay(primaryRole);

  return (
    <div style={{
      position: 'fixed',
      top: '2rem',
      left: '2rem',
      background: roleInfo.bg,
      color: roleInfo.color,
      padding: '0.75rem 1rem',
      borderRadius: '12px',
      fontSize: '0.875rem',
      fontWeight: '600',
      border: `1px solid ${roleInfo.color}20`,
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      minWidth: '200px'
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <strong>{roleInfo.label}</strong>
        {userRoles.length > 1 && (
          <span style={{ 
            marginLeft: '0.5rem', 
            fontSize: '0.75rem',
            opacity: 0.8 
          }}>
            +{userRoles.length - 1} more
          </span>
        )}
      </div>
      <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>
        <strong>Permissions:</strong>
        <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1rem' }}>
          {roleInfo.permissions.map((permission, index) => (
            <li key={index} style={{ marginBottom: '0.125rem' }}>
              {permission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserRoleDisplay; 