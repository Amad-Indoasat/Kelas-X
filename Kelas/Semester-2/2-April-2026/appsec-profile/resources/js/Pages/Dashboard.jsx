import { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Shield, Terminal, Code, Network, Award, Target,
    LogOut, UserCircle, Pencil, X, Plus, Trash2,
    ChevronRight, CheckCircle2, Circle, Lock, Save,
    AlertCircle, Settings, Link as LinkIcon, Globe, Mail
} from 'lucide-react';

/* ─────────────────── Close-on-Escape hook ─────────────────── */
function useEscape(cb) {
    const handler = (e) => e.key === 'Escape' && cb();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
}

/* ─────────────────── Modal Shell ─────────────────── */
function Modal({ title, wide = false, onClose, children }) {
    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className={`modal ${wide ? 'modal-wide' : ''}`}>
                <div className="modal-header">
                    <span className="font-bold text-lg">{title}</span>
                    <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}>
                        <X size={16} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

/* ─────────────────── Flash Notice ─────────────────── */
function Flash() {
    const { flash } = usePage().props;
    if (!flash?.success) return null;
    return <div className="flash flash-success"><CheckCircle2 size={14} /> {flash.success}</div>;
}

/* ─────────────────── MODALS ─────────────────── */

/* 1. Overview Edit Modal */
function OverviewModal({ profile, onClose }) {
    const { data, setData, patch, processing, errors } = useForm({
        title:    profile.title,
        bio:      profile.bio ?? '',
        level:    profile.level,
        status:   profile.status,
        clearance: profile.clearance,
        focus:    profile.focus,
        skills:   profile.skills,
        roadmap:  profile.roadmap,
    });

    const save = (e) => {
        e.preventDefault();
        patch(route('career.update'), { onSuccess: onClose });
    };

    return (
        <Modal title="Edit Overview" onClose={onClose}>
            <form onSubmit={save}>
                <div className="modal-body flex flex-col gap-4">
                    <div className="form-group">
                        <label>Judul Karir</label>
                        <input className="form-input" value={data.title} onChange={e => setData('title', e.target.value)} />
                        {errors.title && <p className="field-error">{errors.title}</p>}
                    </div>
                    <div className="form-group">
                        <label>Bio / Deskripsi</label>
                        <textarea className="form-textarea" rows={3} value={data.bio} onChange={e => setData('bio', e.target.value)} />
                    </div>
                    <div className="grid-2">
                        <div className="form-group">
                            <label>Level</label>
                            <input className="form-input" value={data.level} onChange={e => setData('level', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <input className="form-input" value={data.status} onChange={e => setData('status', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Clearance</label>
                            <input className="form-input" value={data.clearance} onChange={e => setData('clearance', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Fokus Area</label>
                            <input className="form-input" value={data.focus} onChange={e => setData('focus', e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-ghost" onClick={onClose}>Batal</button>
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        <Save size={15} /> {processing ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

/* 2. Skills Edit Modal */
function SkillsModal({ profile, onClose }) {
    const { data, setData, patch, processing } = useForm({
        title: profile.title, bio: profile.bio, level: profile.level,
        status: profile.status, clearance: profile.clearance, focus: profile.focus,
        skills: profile.skills ?? [],
        roadmap: profile.roadmap,
    });

    const updateSkill = (i, field, val) => {
        const s = [...data.skills];
        s[i] = { ...s[i], [field]: field === 'progress' ? Number(val) : val };
        setData('skills', s);
    };

    const addSkill = () => setData('skills', [...data.skills, { title: 'Skill Baru', desc: 'Deskripsi skill.', progress: 50 }]);
    const removeSkill = (i) => setData('skills', data.skills.filter((_, idx) => idx !== i));

    const save = (e) => {
        e.preventDefault();
        patch(route('career.update'), { onSuccess: onClose });
    };

    return (
        <Modal title="Edit Skills" wide onClose={onClose}>
            <form onSubmit={save}>
                <div className="modal-body flex flex-col gap-4" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    {data.skills.map((skill, i) => (
                        <div key={i} className="card card-sm" style={{ borderColor: 'rgba(16,185,129,0.2)' }}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-sm text-green">Skill #{i + 1}</span>
                                <button type="button" className="btn btn-danger btn-icon btn-sm" onClick={() => removeSkill(i)}>
                                    <Trash2 size={13} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="form-group">
                                    <label>Nama Skill</label>
                                    <input className="form-input" value={skill.title} onChange={e => updateSkill(i, 'title', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Deskripsi</label>
                                    <textarea className="form-textarea" rows={2} value={skill.desc} onChange={e => updateSkill(i, 'desc', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Profisiensi: <span className="text-green">{skill.progress}%</span></label>
                                    <input type="range" min="0" max="100" value={skill.progress} onChange={e => updateSkill(i, 'progress', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn btn-ghost w-full" onClick={addSkill}>
                        <Plus size={15} /> Tambah Skill
                    </button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-ghost" onClick={onClose}>Batal</button>
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        <Save size={15} /> {processing ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

/* 3. Roadmap Edit Modal */
function RoadmapModal({ profile, onClose }) {
    const { data, setData, patch, processing } = useForm({
        title: profile.title, bio: profile.bio, level: profile.level,
        status: profile.status, clearance: profile.clearance, focus: profile.focus,
        skills: profile.skills,
        roadmap: profile.roadmap ?? [],
    });

    const updateStep = (i, field, val) => {
        const r = [...data.roadmap];
        r[i] = { ...r[i], [field]: val };
        setData('roadmap', r);
    };

    const addStep = () => setData('roadmap', [...data.roadmap, { year: 'Phase X', title: 'Target baru', status: 'locked' }]);
    const removeStep = (i) => setData('roadmap', data.roadmap.filter((_, idx) => idx !== i));

    const save = (e) => {
        e.preventDefault();
        patch(route('career.update'), { onSuccess: onClose });
    };

    return (
        <Modal title="Edit Roadmap" wide onClose={onClose}>
            <form onSubmit={save}>
                <div className="modal-body flex flex-col gap-3" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    {data.roadmap.map((step, i) => (
                        <div key={i} className="card card-sm flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-cyan">Step #{i + 1}</span>
                                <button type="button" className="btn btn-danger btn-icon btn-sm" onClick={() => removeStep(i)}>
                                    <Trash2 size={13} />
                                </button>
                            </div>
                            <div className="grid-2">
                                <div className="form-group">
                                    <label>Fase / Label</label>
                                    <input className="form-input" value={step.year} onChange={e => updateStep(i, 'year', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select className="form-select form-input" value={step.status} onChange={e => updateStep(i, 'status', e.target.value)}>
                                        <option value="completed">✅ Completed</option>
                                        <option value="current">🔄 In Progress</option>
                                        <option value="locked">🔒 Locked</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Judul Target</label>
                                <input className="form-input" value={step.title} onChange={e => updateStep(i, 'title', e.target.value)} />
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn btn-ghost w-full" onClick={addStep}>
                        <Plus size={15} /> Tambah Step
                    </button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-ghost" onClick={onClose}>Batal</button>
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        <Save size={15} /> {processing ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

/* ─────────────────── SECTION HEADER ─────────────────── */
function SectionHeader({ icon, title, onEdit }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl flex items-center gap-2 font-bold">
                <span className="text-green">{icon}</span> {title}
            </h2>
            <button className="btn btn-ghost btn-sm" onClick={onEdit}>
                <Pencil size={14} /> Edit
            </button>
        </div>
    );
}

/* ─────────────────── TIMELINE DOT ─────────────────── */
function DotIcon({ status }) {
    if (status === 'completed') return <CheckCircle2 size={16} />;
    if (status === 'current')   return <ChevronRight size={16} />;
    return <Lock size={14} />;
}

/* ─────────────────── MAIN DASHBOARD ─────────────────── */
export default function Dashboard({ auth, careerProfile }) {
    const { post } = useForm();
    const [modal, setModal] = useState(null); // 'overview' | 'skills' | 'roadmap'
    const avatarUrl = auth.user.avatar_url;

    const skills  = careerProfile.skills  ?? [];
    const roadmap = careerProfile.roadmap ?? [];

    const stats = [
        { label: 'Level',     val: careerProfile.level },
        { label: 'Status',    val: careerProfile.status },
        { label: 'Clearance', val: careerProfile.clearance },
        { label: 'Focus',     val: careerProfile.focus },
    ];

    const iconMap = ['#', '◈', '⬡'];

    return (
        <>
            <Head title={`${auth.user.name} | AppSec Profile`} />

            {/* ── Navbar ── */}
            <nav className="navbar">
                <div className="flex items-center gap-2">
                    <Shield size={24} className="text-green" />
                    <a href="#" className="nav-brand text-gradient">DASHBOARD</a>
                </div>
                <div className="flex items-center gap-1 md-hidden">
                    <a href="#overview" className="nav-link">Overview</a>
                    <a href="#skills"   className="nav-link">Skills</a>
                    <a href="#roadmap"  className="nav-link">Roadmap</a>
                    <a href="#connect"  className="nav-link">Connect</a>
                </div>
                <div className="nav-right">
                    {/* Avatar chip */}
                    <Link href={route('profile.edit')} className="user-chip" style={{ textDecoration: 'none', cursor: 'pointer' }} title="Edit Profil">
                        <img
                            src={avatarUrl}
                            alt={auth.user.name}
                            style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <span>{auth.user.username ?? auth.user.name}</span>
                        <Settings size={13} style={{ opacity: 0.5 }} />
                    </Link>
                    <button
                        className="btn btn-ghost btn-icon btn-sm"
                        title="Logout"
                        onClick={() => post(route('logout'))}
                    >
                        <LogOut size={16} className="text-red" />
                    </button>
                </div>
            </nav>

            {/* ── Page ── */}
            <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
                <Flash />

                {/* ── Hero Section ── */}
                <section id="overview" className="anim-1 mb-8">
                    <div className="card card-lg relative overflow-hidden">
                        {/* bg shield watermark */}
                        <div className="absolute" style={{ right: -40, top: -40, opacity: 0.06, color: 'var(--green)' }}>
                            <Shield size={280} strokeWidth={1} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="badge badge-green pulse">
                                    <Terminal size={12} /> ACTIVE PROFILE
                                </div>
                                <button className="btn btn-ghost btn-sm" onClick={() => setModal('overview')}>
                                    <Pencil size={14} /> Edit Profile
                                </button>
                            </div>

                            <h1 className="text-4xl font-black mb-3" style={{ letterSpacing: '-0.04em' }}>
                                {careerProfile.title}
                            </h1>
                            <p className="text-muted mb-8" style={{ maxWidth: '560px', lineHeight: 1.8 }}>
                                {careerProfile.bio}
                            </p>

                            <div className="grid-4" style={{ maxWidth: '560px' }}>
                                {stats.map((s, i) => (
                                    <div key={i} className="stat-box">
                                        <div className="stat-lbl">{s.label}</div>
                                        <div className="stat-val" style={{ fontSize: '0.9rem' }}>{s.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Terminal Widget ── */}
                <section className="anim-2 mb-8">
                    <div className="terminal-widget">
                        <div className="terminal-bar">
                            <div className="t-dot red"></div>
                            <div className="t-dot yellow"></div>
                            <div className="t-dot green"></div>
                            <span className="text-xs text-dim font-mono ml-2">appsec@terminal:~</span>
                        </div>
                        <div className="terminal-content">
                            <div><span className="t-prompt">❯ </span><span className="t-cmd">whoami</span></div>
                            <div className="t-output">{auth.user.name} — {careerProfile.title}</div>
                            <div><span className="t-prompt">❯ </span><span className="t-cmd">status --clearance</span></div>
                            <div className="t-info">Clearance: {careerProfile.clearance} | Focus: {careerProfile.focus}</div>
                            <div><span className="t-prompt">❯ </span><span className="t-cmd">_</span></div>
                        </div>
                    </div>
                </section>

                {/* ── Skills ── */}
                <section id="skills" className="anim-3 mb-8">
                    <SectionHeader
                        icon={<Code size={22} />}
                        title="Core Security Matrix"
                        onEdit={() => setModal('skills')}
                    />

                    {skills.length === 0 ? (
                        <div className="card flex flex-col items-center gap-3 p-8 text-muted">
                            <AlertCircle size={32} />
                            <p>Belum ada skill. Klik <strong>Edit</strong> untuk menambahkan.</p>
                        </div>
                    ) : (
                        <div className="grid-3">
                            {skills.map((skill, i) => (
                                <div key={i} className="skill-card">
                                    <div className="skill-icon">
                                        <span className="font-mono font-bold text-green">{iconMap[i] ?? '#'}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1" style={{ fontSize: '1rem' }}>{skill.title}</h3>
                                        <p className="text-muted text-sm">{skill.desc}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs text-dim">Profisiensi</span>
                                            <span className="text-xs font-bold text-green">{skill.progress}%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div className="progress-fill" style={{ width: `${skill.progress}%` }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* ── Roadmap ── */}
                <section id="roadmap" className="anim-4">
                    <SectionHeader
                        icon={<Target size={22} />}
                        title="Career Roadmap"
                        onEdit={() => setModal('roadmap')}
                    />

                    {roadmap.length === 0 ? (
                        <div className="card flex flex-col items-center gap-3 p-8 text-muted">
                            <AlertCircle size={32} />
                            <p>Belum ada roadmap. Klik <strong>Edit</strong> untuk menambahkan.</p>
                        </div>
                    ) : (
                        <div className="card card-lg">
                            <div className="timeline">
                                {roadmap.map((item, i) => {
                                    const dotCls = item.status === 'completed' ? 'done' : item.status === 'current' ? 'current' : 'locked';
                                    const contentCls = item.status === 'current' ? 'timeline-content is-current' : 'timeline-content';
                                    return (
                                        <div key={i} className="timeline-item">
                                            <div className={`timeline-dot ${dotCls}`}>
                                                <DotIcon status={item.status} />
                                            </div>
                                            <div className={contentCls}>
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <span className="font-bold" style={{ fontSize: '0.95rem' }}>{item.title}</span>
                                                    <span className={`badge ${dotCls === 'done' ? 'badge-green' : dotCls === 'current' ? 'badge-cyan' : 'badge-gray'}`}>
                                                        {item.year}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </section>

                {/* ── Connect / Social Profiles ── */}
                <section id="connect" className="anim-4" style={{ marginTop: '2rem' }}>
                    <div className="card card-lg" style={{ borderColor: 'rgba(6,182,212,0.2)' }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-cyan"><Network size={22} /></span> Connect & Profiles
                        </h2>
                        <div className="grid-2">
                            {auth.user.email && (
                                <a href={`mailto:${auth.user.email}`} className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none' }}>
                                    <Mail size={16} /> <span className="truncate">{auth.user.email}</span>
                                </a>
                            )}
                            {auth.user.github_url ? (
                                <a href={auth.user.github_url} target="_blank" rel="noreferrer" className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none' }}>
                                    <LinkIcon size={16} /> <span className="truncate">{auth.user.github_url.replace('https://', '')}</span>
                                </a>
                            ) : (
                                <div className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none', opacity: 0.5 }}>
                                    <LinkIcon size={16} /> Not configured
                                </div>
                            )}
                            {auth.user.linkedin_url ? (
                                <a href={auth.user.linkedin_url} target="_blank" rel="noreferrer" className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none' }}>
                                    <LinkIcon size={16} /> <span className="truncate">{auth.user.linkedin_url.replace('https://', '')}</span>
                                </a>
                            ) : (
                                <div className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none', opacity: 0.5 }}>
                                    <LinkIcon size={16} /> Not configured
                                </div>
                            )}
                            {auth.user.website_url ? (
                                <a href={auth.user.website_url} target="_blank" rel="noreferrer" className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none' }}>
                                    <Globe size={16} /> <span className="truncate">{auth.user.website_url.replace('https://', '')}</span>
                                </a>
                            ) : (
                                <div className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none', opacity: 0.5 }}>
                                    <Globe size={16} /> Not configured
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* ── Modals ── */}
            {modal === 'overview' && <OverviewModal profile={careerProfile} onClose={() => setModal(null)} />}
            {modal === 'skills'   && <SkillsModal   profile={careerProfile} onClose={() => setModal(null)} />}
            {modal === 'roadmap'  && <RoadmapModal  profile={careerProfile} onClose={() => setModal(null)} />}
        </>
    );
}
