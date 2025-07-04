import { useUser } from '@clerk/clerk-react';
import ServiceCard from '../components/ServiceCard';

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
        </div>
      </div>
    </div>
  );
};

export default WelcomePage; 