import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import './styles/global.css';

// Components
import LogoutButton from './components/LogoutButton';
import UserRoleDisplay from './components/UserRoleDisplay';
import SetRoleButton from './components/SetRoleButton';

// Pages
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  // Use the environment variable
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Router>
        <div style={{ width: '100vw', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
          {/* Global Logout Options - Always visible when signed in */}
          <SignedIn>
            <LogoutButton />
            <UserRoleDisplay />
            <SetRoleButton />
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
