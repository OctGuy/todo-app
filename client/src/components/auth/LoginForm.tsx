import React, { useState } from 'react';
import type { LoginRequest } from '../../api/authApi';
import authApi from '../../api/authApi';

interface LoginErrors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<LoginErrors>({});
  const [generalError, setGeneralError] = useState('');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email': {
        if (!value.trim()) return 'Email is required.'; // Email cannot be empty
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address.'; // Invalid email format
        return ''; // No error
      }
      case 'password':
        if (!value.trim()) return 'Password is required.'; // Password cannot be empty
        if (value.length < 6) return 'Password must be at least 6 characters long.'; // Minimum length for password
        return ''; // No error
      default:
        return ''; // No error for other fields
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name as keyof LoginErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(''); // Clear previous general error

    // Validate all fields before submission
    const newErrors: LoginErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof LoginErrors] = error;
    });

    setErrors(newErrors); // Update state with new errors

    if (Object.keys(newErrors).length > 0) {
      //setErrors(newErrors);
      return; // Prevent submission if there are validation errors
    }

    try {
      const response = await authApi.login(formData);
      console.log('Login successful:', response.data);
    } catch (error: any) {
      if (error.response?.data?.message)
        setGeneralError(error.response.data.message); // Set general error message from API response
      else
        setGeneralError('An unexpected error occurred. Please try again later.'); // Fallback error message
      console.error('Login error:', error);
    }
    setFormData({ email: '', password: '' }); // Reset form data on successful submission
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {generalError && (
        <div className="alert alert-danger" role="alert" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
          {generalError}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="username" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-person-fill me-2"></i>Email
        </label>
        <input
          type="text"
          className="form-control form-control-lg border-primary"
          style={{
            borderRadius: '12px',
            boxShadow: errors.email ? '0 2px 8px rgba(220,53,69,0.1)' : '0 2px 8px rgba(25,135,84,0.1)',
            fontSize: '0.9rem'
          }}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && (
          <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
            <i className="bi bi-exclamation-circle me-1"></i>
            {errors.email}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-lock-fill me-2"></i>Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg border-primary"
          style={{
            borderRadius: '12px',
            boxShadow: errors.password ? '0 2px 8px rgba(220,53,69,0.1)' : '0 2px 8px rgba(255,193,7,0.1)',
            fontSize: '0.9rem'
          }}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          required
        />
        {errors.password && (
          <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
            <i className="bi bi-exclamation-circle me-1"></i>
            {errors.password}
          </div>
        )}
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
