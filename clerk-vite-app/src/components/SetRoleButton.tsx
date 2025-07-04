import { useUser } from '@clerk/clerk-react';

const SetRoleButton = () => {
  const { user } = useUser();

  const setRole = async (role: string) => {
    if (!user) return;
    
    try {
      // Update the user's public metadata using the correct method
      await user.update({
        unsafeMetadata: {
          roles: [role]
        }
      });
      
      console.log(`Role set to: ${role}`);
      alert(`Role set to: ${role}. Please refresh the page.`);
    } catch (error) {
      console.error('Error setting role:', error);
      alert('Error setting role. Check console for details.');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      background: '#f3f4f6',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      zIndex: 1000
    }}>
      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>
        Set Role (Temporary)
      </h4>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setRole('admin')}
          style={{
            padding: '0.5rem 1rem',
            background: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem'
          }}
        >
          Set Admin
        </button>
        <button 
          onClick={() => setRole('stylist')}
          style={{
            padding: '0.5rem 1rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem'
          }}
        >
          Set Stylist
        </button>
        <button 
          onClick={() => setRole('client')}
          style={{
            padding: '0.5rem 1rem',
            background: '#d97706',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem'
          }}
        >
          Set Client
        </button>
      </div>
    </div>
  );
};

export default SetRoleButton; 