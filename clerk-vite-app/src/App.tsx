import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import './styles/global.css';

// Components
import LogoutButton from './components/LogoutButton';

// Pages
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  
  if (!publishableKey) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ color: '#475569', marginBottom: '1rem' }}>Configuration Error</h2>
          <p style={{ color: '#6b7280' }}>
            Clerk publishable key is not configured. Please check your environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Router>
        <div style={{ width: '100vw', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
          {/* Global Logout Options - Always visible when signed in */}
          <SignedIn>
            <LogoutButton />
          </SignedIn>

          <Routes>
            {/* Root route - redirect based on auth status */}
            <Route path="/" element={
              <>
                <SignedIn>
                  <Navigate to="/dashboard" replace />
                </SignedIn>
                <SignedOut>
                  <LoginPage />
                </SignedOut>
              </>
            } />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <>
                <SignedIn>
                  <WelcomePage />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/" replace />
                </SignedOut>
              </>
            } />
            
            {/* Redirect to login if not authenticated */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
