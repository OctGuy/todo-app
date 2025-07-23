import React from 'react';

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}
  
const LoginForm: React.FC<LoginFormProps> = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-person-fill me-2"></i>Email
        </label>
        <input
          type="text"
          className="form-control form-control-lg border-primary"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(0,123,255,0.1)',
            fontSize: '0.9rem'
          }}
          id="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label text-start d-block fw-semibold text-danger">
          <i className="bi bi-lock-fill me-2"></i>Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg border-danger"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(220,53,69,0.1)',
            fontSize: '0.9rem'
          }}
          id="password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary btn-lg w-100 mb-3"
        style={{ 
          borderRadius: '12px', 
          background: 'linear-gradient(45deg, #007bff, #0056b3)',
          border: 'none',
          boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
      >
        <i className="bi bi-box-arrow-in-right me-2"></i>Login
      </button>
    </form>
  );
};

export default LoginForm;
