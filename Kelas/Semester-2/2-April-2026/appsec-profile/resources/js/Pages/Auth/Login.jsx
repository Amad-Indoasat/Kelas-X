import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Shield, Lock, ArrowLeft } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => () => reset('password'), []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Login — AppSec Profile" />

            <div className="center-page">
                <div style={{ width: '100%', maxWidth: '420px' }}>
                    {/* Back link */}
                    <Link href="/" className="flex items-center gap-1 text-sm text-muted mb-6" style={{ textDecoration: 'none' }}>
                        <ArrowLeft size={14} /> Kembali ke Beranda
                    </Link>

                    <div className="card card-lg anim-1">
                        {/* Header */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="card card-sm pulse mb-4" style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'rgba(6,182,212,0.3)' }}>
                                <Shield size={28} className="text-cyan" />
                            </div>
                            <h1 className="text-2xl font-bold">Selamat Datang</h1>
                            <p className="text-muted text-sm mt-1">Masuk ke profil AppSec Anda</p>
                        </div>

                        {status && <div className="flash flash-success mb-4">{status}</div>}

                        <form onSubmit={submit}>
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-input"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={e => setData('email', e.target.value)}
                                    required
                                />
                                {errors.email && <p className="field-error">{errors.email}</p>}
                            </div>

                            <div className="form-group mb-6">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-input"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                                {errors.password && <p className="field-error">{errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <label className="flex items-center gap-2 cursor-pointer text-sm text-muted">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={e => setData('remember', e.target.checked)}
                                    />
                                    Ingat sesi ini
                                </label>
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-sm text-cyan" style={{ textDecoration: 'none' }}>
                                        Lupa password?
                                    </Link>
                                )}
                            </div>

                            <button type="submit" className="btn btn-primary btn-full" disabled={processing}>
                                <Lock size={15} />
                                {processing ? 'Memproses...' : 'Masuk'}
                            </button>
                        </form>

                        <p className="text-center text-sm text-muted mt-6">
                            Belum punya akun?{' '}
                            <Link href={route('register')} className="text-green font-medium" style={{ textDecoration: 'none' }}>
                                Daftar sekarang
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
