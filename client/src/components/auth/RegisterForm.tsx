import React, { useState } from 'react';
import type { RegisterRequest } from '../../api/authApi';
import authApi from '../../api/authApi';

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState('');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'username':
        if (!value.trim()) return 'Username is required.'; // Username cannot be empty
        if (value.length < 3) return 'Username must be at least 3 characters long.'; // Minimum length for username 
        return ''; // No error
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(''); // Clear previous general error

    // Validate all fields before submission
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors); // Update state with new errors

    if (Object.keys(newErrors).length > 0) {
      //setErrors(newErrors);
      return; // Prevent submission if there are validation errors
    }

    try {
      const response = await authApi.register(formData);
      console.log('Registration successful:', response.data);
    } catch (error: any) {
      if (error.response?.data?.message)
        setGeneralError(error.response.data.message); // Set general error message from API response
      else
        setGeneralError('An unexpected error occurred. Please try again later.'); // Fallback error message
      console.error('Registration error:', error);
    }
    setFormData({ username: '', email: '', password: '' }); // Reset form data on successful submission
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {generalError && (
        <div className="alert alert-danger" role="alert" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
          {generalError}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="username" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-person-fill me-2"></i>Username
        </label>
        <input
          type="text"
          className="form-control form-control-lg border-primary"
          style={{
            borderRadius: '12px',
            boxShadow: errors.username ? '0 2px 8px rgba(220,53,69,0.1)' : '0 2px 8px rgba(0,123,255,0.1)',
            fontSize: '0.9rem'
          }}
          id="username"
          name="username"
          value={formData.username}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          placeholder="Enter your username"
          required
        />
        {errors.username && (
          <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
            <i className="bi bi-exclamation-circle me-1"></i>
            {errors.username}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label text-start d-block fw-semibold text-primary">
          <i className="bi bi-envelope-fill me-2"></i>Email
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
          onBlur={handleInputBlur}
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
          onBlur={handleInputBlur}
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
