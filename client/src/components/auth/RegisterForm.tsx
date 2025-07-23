import React, { useState } from 'react';
import type { RegisterRequest } from '../../api/authApi';
import authApi from '../../api/authApi';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(''); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await authApi.register(formData);
      console.log('Registration successful:', res.data.data);
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-person-fill me-2"></i>Username
        </label>
        <input
          type="text"
          className="form-control form-control-lg border-primary"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(0,123,255,0.1)',
            background: 'linear-gradient(135deg, rgba(0,123,255,0.05) 0%, rgba(255,255,255,1) 100%)'
          }}
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label text-start d-block fw-semibold text-success">
          <i className="bi bi-envelope-fill me-2"></i>Email
        </label>
        <input
          type="email"
          className="form-control form-control-lg border-success"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(25,135,84,0.1)',
            background: 'linear-gradient(135deg, rgba(25,135,84,0.05) 0%, rgba(255,255,255,1) 100%)'
          }}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label text-start d-block fw-semibold text-warning">
          <i className="bi bi-lock-fill me-2"></i>Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg border-warning"
          style={{ 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(255,193,7,0.1)',
            background: 'linear-gradient(135deg, rgba(255,193,7,0.05) 0%, rgba(255,255,255,1) 100%)'
          }}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a strong password"
          required
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-success btn-lg w-100 mb-3"
        style={{ 
          borderRadius: '12px', 
          background: 'linear-gradient(45deg, #28a745, #20c997)',
          border: 'none',
          boxShadow: '0 4px 15px rgba(40,167,69,0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
      >
        <i className="bi bi-person-plus-fill me-2"></i>Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
