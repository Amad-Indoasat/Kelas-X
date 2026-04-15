import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, UserPlus, AlertCircle } from 'lucide-react';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    try {
      await register(form.name, form.email, form.password, form.password_confirmation);
      navigate('/dashboard');
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: [err.response?.data?.message || 'Registration failed'] });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Shield size={40} className="text-green" />
          <h1 className="text-gradient">My Profile</h1>
          <p className="text-muted">Create your account</p>
        </div>

        {errors.general && (
          <div className="flash flash-error">
            <AlertCircle size={14} /> {errors.general[0]}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              autoFocus
            />
            {errors.name && <p className="field-error">{errors.name[0]}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            {errors.email && <p className="field-error">{errors.email[0]}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            {errors.password && <p className="field-error">{errors.password[0]}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-input"
              value={form.password_confirmation}
              onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            <UserPlus size={16} /> {loading ? 'Creating...' : 'Register'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="text-green">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
