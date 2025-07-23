import React from 'react';

interface ForgotPasswordFormProps {
  formData: {
    email: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="form-label text-start d-block fw-semibold text-info">
          <i className="bi bi-envelope-fill me-2"></i>Email Address
        </label>
        <input
          type="email"
          className="form-control form-control-lg border-info"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(23,162,184,0.1)',
            background: 'linear-gradient(135deg, rgba(23,162,184,0.05) 0%, rgba(255,255,255,1) 100%)'
          }}
          id="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Enter your email address"
          required
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-info btn-lg w-100 mb-3"
        style={{ 
          borderRadius: '12px', 
          background: 'linear-gradient(45deg, #17a2b8, #138496)',
          border: 'none',
          color: 'white',
          boxShadow: '0 4px 15px rgba(23,162,184,0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
      >
        <i className="bi bi-arrow-clockwise me-2"></i>Reset Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
