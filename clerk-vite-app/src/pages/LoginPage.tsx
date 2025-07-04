import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <div className="split-screen">
      {/* Left Panel - Login Form */}
      <div className="left-panel">
        <div className="login-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="brand-title">Elegance Salon</h1>
            <p className="brand-subtitle">Professional Beauty Services Portal</p>
          </div>
          <SignIn 
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: {
                  backgroundColor: '#475569',
                  '&:hover': {
                    backgroundColor: '#334155'
                  }
                },
                formFieldInput: {
                  backgroundColor: '#f9fafb',
                  borderColor: '#e5e7eb',
                  '&:focus': {
                    borderColor: '#475569',
                    boxShadow: '0 0 0 3px rgba(71, 85, 105, 0.1)'
                  }
                },
                headerTitle: {
                  fontFamily: 'Playfair Display, serif',
                  color: '#1f2937'
                },
                headerSubtitle: {
                  fontFamily: 'Poppins, sans-serif',
                  color: '#6b7280'
                }
              }
            }}
          />
        </div>
      </div>
      
      {/* Right Panel - Salon Image */}
      <div className="right-panel">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
          alt="Professional Hair Salon" 
          className="salon-image"
        />
        <div className="image-overlay"></div>
        <div className="image-content">
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem', 
            fontFamily: 'Playfair Display, serif',
            fontWeight: '600'
          }}>
            Welcome to Elegance
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.9,
            maxWidth: '400px',
            lineHeight: '1.6'
          }}>
            Experience the finest beauty and wellness services in our luxurious salon environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 