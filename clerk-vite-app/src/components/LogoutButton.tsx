import { UserButton, SignOutButton } from '@clerk/clerk-react';

const LogoutButton = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '2rem', 
      right: '2rem', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1rem',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <UserButton afterSignOutUrl='/' />
        <span style={{ color: '#334155', fontWeight: 500, fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif' }}>Profile</span>
      </div>
      <SignOutButton>
        <button style={{
          background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(71, 85, 105, 0.2)'
        }}>
          Logout
        </button>
      </SignOutButton>
    </div>
  );
};

export default LogoutButton; 