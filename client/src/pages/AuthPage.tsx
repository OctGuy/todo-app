import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

type AuthMode = 'login' | 'register' | 'forgot';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');

  const renderForm = () => {
    switch (mode) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
    }
  };

  return (
    <div className="container-fluid vh-100 vw-100 p-0 m-0" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      minWidth: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      <div className="row h-100 m-0">
        <div className="col-12 d-flex align-items-center justify-content-center py-5">
          <div style={{ width: '450px', maxWidth: '90%' }}>
            <div className="card shadow-lg border-0" style={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="card-body p-3">
                <div className="text-center mb-5">
                  <div className="mb-4">
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 10px rgba(102, 126, 234, 0.3)',
                      letterSpacing: '2px',
                      marginBottom: '10px'
                    }}>
                      <i className="bi bi-check2-square me-2" style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}></i>
                      TO-DO APP
                    </div>
                    <div style={{
                      width: '60px',
                      height: '4px',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      margin: '0 auto',
                      borderRadius: '2px',
                      boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)'
                    }}></div>
                  </div>
                  <h2 className="card-title fw-bold" style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {mode === 'login' && 'Welcome Back!'}
                    {mode === 'register' && 'Join Us Today!'}
                    {mode === 'forgot' && 'Reset Password'}
                  </h2>
                  <p className="text-muted fs-6">
                    {mode === 'login' && 'Please sign in to your account'}
                    {mode === 'register' && 'Create your account to get started'}
                    {mode === 'forgot' && 'Enter your email to reset your password'}
                  </p>
                </div>

                {renderForm()}

                <div className="text-center">
                  {mode === 'login' && (
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-link text-decoration-none"
                        onClick={() => setMode('register')}
                        style={{ color: '#667eea', fontWeight: '500' }}
                      >
                        <i className="bi bi-person-plus me-1"></i>Create Account
                      </button>
                      <button
                        className="btn btn-link text-decoration-none"
                        onClick={() => setMode('forgot')}
                        style={{ color: '#764ba2', fontWeight: '500' }}
                      >
                        <i className="bi bi-question-circle me-1"></i>Forgot Password?
                      </button>
                    </div>
                  )}
                  {mode === 'register' && (
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => setMode('login')}
                      style={{ color: '#667eea', fontWeight: '500' }}
                    >
                      <i className="bi bi-arrow-left me-1"></i>Already have an account? Login
                    </button>
                  )}
                  {mode === 'forgot' && (
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => setMode('login')}
                      style={{ color: '#667eea', fontWeight: '500' }}
                    >
                      <i className="bi bi-arrow-left me-1"></i>Back to Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;