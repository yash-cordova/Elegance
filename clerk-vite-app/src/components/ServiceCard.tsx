interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

const ServiceCard = ({ title, description, gradient, borderColor }: ServiceCardProps) => {
  return (
    <div style={{ 
      background: gradient,
      padding: '1.5rem', 
      borderRadius: '15px', 
      textAlign: 'center',
      border: `1px solid ${borderColor}`
    }}>
      <h3 style={{ color: '#475569', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{description}</p>
    </div>
  );
};

export default ServiceCard; 