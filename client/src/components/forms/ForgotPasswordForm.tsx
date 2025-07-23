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
          <i className="bi bi-envelope-at-fill me-2"></i>Email Address
        </label>
        <input
          type="email"
          className="form-control form-control-lg border-info"
          style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(13,202,240,0.1)', fontSize: '0.9rem' }}
          id="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Enter your email to reset password"
          required
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-warning btn-lg w-100 mb-3"
        style={{ 
          borderRadius: '12px', 
          background: 'linear-gradient(45deg, #ffc107, #ff8c00)',
          border: 'none',
          boxShadow: '0 4px 15px rgba(255,193,7,0.3)',
          transition: 'all 0.3s ease',
          color: '#fff'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
      >
        <i className="bi bi-key-fill me-2"></i>Reset Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
