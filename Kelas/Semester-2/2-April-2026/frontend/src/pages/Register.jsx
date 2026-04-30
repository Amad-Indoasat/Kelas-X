import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserPlus, Mail, Lock, User, AlertCircle, Sparkles } from 'lucide-react';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password, form.password_confirmation);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.errors;
      if (typeof msg === 'object') {
        setError(Object.values(msg).flat().join(' '));
      } else {
        setError(msg || 'Registrasi gagal. Coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card animate-in">
        <div className="auth-header">
          <div className="auth-icon-wrap">
            <Sparkles size={28} />
          </div>
          <h1 className="auth-title">Buat Akun</h1>
          <p className="auth-subtitle">Daftar untuk membuat profil kamu</p>
        </div>

        {error && (
          <div className="flash flash-error">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <div className="input-wrap">
              <User size={16} className="input-icon" />
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="Nama lengkap"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrap">
              <Mail size={16} className="input-icon" />
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="nama@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <Lock size={16} className="input-icon" />
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Min. 8 karakter"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password_confirmation">Konfirmasi Password</label>
            <div className="input-wrap">
              <Lock size={16} className="input-icon" />
              <input
                id="password_confirmation"
                type="password"
                className="form-input"
                placeholder="Ulangi password"
                value={form.password_confirmation}
                onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            <UserPlus size={16} />
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>

        <p className="auth-footer">
          Sudah punya akun?{' '}
          <Link to="/login" className="auth-link">Masuk di sini</Link>
        </p>
      </div>
    </div>
  );
}
