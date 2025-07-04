import { useUser } from '@clerk/clerk-react';
import ServiceCard from '../components/ServiceCard';
import RoleBasedAccess from '../components/RoleBasedAccess';

const WelcomePage = () => {
  const { user } = useUser();

  const services = [
    {
      title: 'Hair Services',
      description: 'Cut, Color, Styling',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderColor: 'rgba(71, 85, 105, 0.2)'
    },
    {
      title: 'Beauty Treatments',
      description: 'Facial, Manicure, Pedicure',
      gradient: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      borderColor: 'rgba(71, 85, 105, 0.2)'
    },
    {
      title: 'Wellness',
      description: 'Massage, Therapy',
      gradient: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
      borderColor: 'rgba(71, 85, 105, 0.2)'
    }
  ];

  // Get user roles from metadata
  const userRoles = user?.publicMetadata?.roles as string[] || [];

  return (
    <div className="welcome-container salon-gradient">
      <div className="welcome-content">
        <div className="salon-card" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <h1 className="salon-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Welcome, {user?.firstName || user?.username || 'Valued Guest'}! ✨
          </h1>
          <p className="salon-subtitle" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Thank you for choosing our premium salon platform. We're dedicated to providing you with the finest beauty and wellness experience.
          </p>
          
          {/* Role-based welcome message */}
          {userRoles.includes('admin') && (
            <div style={{ 
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', 
              padding: '1rem', 
              borderRadius: '12px', 
              marginBottom: '1.5rem',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>👑 Administrator Access</h3>
              <p style={{ color: '#15803d', fontSize: '0.9rem' }}>You have full access to manage the salon system.</p>
            </div>
          )}
          
          {userRoles.includes('stylist') && (
            <div style={{ 
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
              padding: '1rem', 
              borderRadius: '12px', 
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>✂️ Stylist Dashboard</h3>
              <p style={{ color: '#1d4ed8', fontSize: '0.9rem' }}>Access your appointments and client management tools.</p>
            </div>
          )}
          
          {userRoles.includes('client') && (
            <div style={{ 
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 
              padding: '1rem', 
              borderRadius: '12px', 
              marginBottom: '1.5rem',
              border: '1px solid rgba(245, 158, 11, 0.2)'
            }}>
              <h3 style={{ color: '#d97706', marginBottom: '0.5rem' }}>💅 Client Portal</h3>
              <p style={{ color: '#b45309', fontSize: '0.9rem' }}>Book appointments and view your beauty services.</p>
            </div>
          )}

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem', 
            marginTop: '2rem' 
          }}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                borderColor={service.borderColor}
              />
            ))}
          </div>

          {/* Admin-only section */}
          <RoleBasedAccess allowedRoles={['admin']}>
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>🔧 Admin Controls</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                <button style={{
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  Manage Users
                </button>
                <button style={{
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  View Reports
                </button>
                <button style={{
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  System Settings
                </button>
              </div>
            </div>
          </RoleBasedAccess>

          {/* Stylist-only section */}
          <RoleBasedAccess allowedRoles={['stylist']}>
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              borderRadius: '15px',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>📅 Stylist Tools</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                <button style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  View Schedule
                </button>
                <button style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  Client List
                </button>
                <button style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  Services
                </button>
              </div>
            </div>
          </RoleBasedAccess>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage; 