import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { UserPlus, ArrowLeft } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => () => reset('password', 'password_confirmation'), []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Register — AppSec Profile" />

            <div className="center-page">
                <div style={{ width: '100%', maxWidth: '420px' }}>
                    <Link href="/" className="flex items-center gap-1 text-sm text-muted mb-6" style={{ textDecoration: 'none' }}>
                        <ArrowLeft size={14} /> Kembali ke Beranda
                    </Link>

                    <div className="card card-lg anim-1">
                        <div className="flex flex-col items-center mb-8">
                            <div className="card card-sm pulse mb-4" style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'rgba(16,185,129,0.3)' }}>
                                <UserPlus size={26} className="text-green" />
                            </div>
                            <h1 className="text-2xl font-bold">Buat Profil</h1>
                            <p className="text-muted text-sm mt-1">Mulai perjalanan AppSec Anda</p>
                        </div>

                        <form onSubmit={submit}>
                            <div className="form-group mb-4">
                                <label htmlFor="name">Nama</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-input"
                                    value={data.name}
                                    autoComplete="name"
                                    onChange={e => setData('name', e.target.value)}
                                    required
                                />
                                {errors.name && <p className="field-error">{errors.name}</p>}
                            </div>

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

                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-input"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                                {errors.password && <p className="field-error">{errors.password}</p>}
                            </div>

                            <div className="form-group mb-8">
                                <label htmlFor="password_confirmation">Konfirmasi Password</label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    className="form-input"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                {errors.password_confirmation && <p className="field-error">{errors.password_confirmation}</p>}
                            </div>

                            <button type="submit" className="btn btn-primary btn-full" disabled={processing}>
                                <UserPlus size={15} />
                                {processing ? 'Membuat akun...' : 'Buat Akun'}
                            </button>
                        </form>

                        <p className="text-center text-sm text-muted mt-6">
                            Sudah punya akun?{' '}
                            <Link href={route('login')} className="text-cyan font-medium" style={{ textDecoration: 'none' }}>
                                Login di sini
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
