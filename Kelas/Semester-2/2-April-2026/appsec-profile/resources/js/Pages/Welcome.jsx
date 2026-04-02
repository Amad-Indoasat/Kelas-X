import { Head, Link } from '@inertiajs/react';
import { Shield, Terminal, LockKeyhole, UserPlus, ChevronRight } from 'lucide-react';

const features = [
    { icon: '🔐', title: 'Secure Auth', desc: 'Login & register yang diamankan via Laravel Breeze.' },
    { icon: '✏️', title: 'Edit Dinamis', desc: 'Edit profil, skills, dan roadmap Anda secara real-time.' },
    { icon: '🛡️', title: 'AppSec Focused', desc: 'Dirancang untuk mereka yang bercita-cita di dunia keamanan siber.' },
];

export default function Welcome({ auth, canLogin, canRegister }) {
    return (
        <>
            <Head title="AppSec Profile — Welcome" />

            <div className="min-h-screen flex flex-col">
                {/* ── Navbar ── */}
                <nav className="navbar">
                    <div className="flex items-center gap-2">
                        <Shield size={22} className="text-green" />
                        <span className="font-bold text-gradient" style={{ letterSpacing: '0.04em' }}>MyProfil</span>
                    </div>
                    {canLogin && (
                        <div className="flex items-center gap-2">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="btn btn-primary btn-sm">
                                    <Terminal size={14} /> Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="btn btn-ghost btn-sm">Login</Link>
                                    {canRegister && (
                                        <Link href={route('register')} className="btn btn-primary btn-sm">Register</Link>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </nav>

                {/* ── Hero ── */}
                <main className="flex flex-col items-center justify-center flex-1 container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                    <div className="anim-1" style={{ textAlign: 'center', maxWidth: '640px' }}>
                        {/* Glow icon */}
                        <div className="flex justify-center mb-6">
                            <div className="card card-sm pulse" style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'rgba(16,185,129,0.3)' }}>
                                <Shield size={36} className="text-green" />
                            </div>
                        </div>

                        <h1 className="font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.05em', lineHeight: 1.1 }}>
                            Profil Karir<br />
                            <span className="text-gradient">Application Security</span>
                        </h1>

                        <p className="text-muted mb-10 anim-2" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Bangun dan tampilkan perjalanan karir impianmu di dunia&nbsp;
                            <strong style={{ color: 'var(--text)' }}>AppSec</strong> — lengkap dengan skills, roadmap, dan target sertifikasi.
                        </p>

                        <div className="flex gap-3 justify-center flex-wrap anim-3">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="btn btn-primary">
                                    <Terminal size={16} /> Masuk ke Dashboard
                                    <ChevronRight size={16} />
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('register')} className="btn btn-primary">
                                        <UserPlus size={16} /> Buat Profil Sekarang
                                    </Link>
                                    <Link href={route('login')} className="btn btn-ghost">
                                        <LockKeyhole size={16} /> Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* ── Feature Cards ── */}
                    <div className="grid-3 anim-4" style={{ marginTop: '5rem', maxWidth: '900px', width: '100%' }}>
                        {features.map((f, i) => (
                            <div key={i} className="card">
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                                <h3 className="font-bold mb-1" style={{ fontSize: '1rem' }}>{f.title}</h3>
                                <p className="text-muted text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Terminal Widget ── */}
                    <div className="anim-4" style={{ marginTop: '3rem', width: '100%', maxWidth: '520px' }}>
                        <div className="terminal-widget">
                            <div className="terminal-bar">
                                <div className="t-dot red"></div>
                                <div className="t-dot yellow"></div>
                                <div className="t-dot green"></div>
                                <span className="text-xs text-dim font-mono ml-2">appsec@init</span>
                            </div>
                            <div className="terminal-content">
                                <div><span className="t-prompt">❯ </span><span className="t-cmd">./init_profile.sh</span></div>
                                <div className="t-output">Initializing career profile...</div>
                                <div className="t-info">Authentication required to proceed.</div>
                                <div><span className="t-prompt">❯ </span><span className="t-cmd">_</span></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
