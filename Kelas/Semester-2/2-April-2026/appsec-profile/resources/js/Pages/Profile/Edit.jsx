import { useRef, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Shield, ArrowLeft, Camera, X, User, Mail, AtSign,
    MapPin, Link as LinkIcon, Globe, Lock, Trash2,
    Save, AlertTriangle, CheckCircle2, Eye, EyeOff
} from 'lucide-react';

/* ─── Flash notice ─── */
function Flash({ status }) {
    if (!status) return null;
    return (
        <div className="flash flash-success">
            <CheckCircle2 size={14} /> {status}
        </div>
    );
}

/* ─── Section wrapper ─── */
function Section({ title, desc, children }) {
    return (
        <div className="card card-lg">
            <div className="mb-6" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}>
                <h2 className="font-bold" style={{ fontSize: '1.1rem' }}>{title}</h2>
                {desc && <p className="text-muted text-sm mt-1">{desc}</p>}
            </div>
            {children}
        </div>
    );
}

/* ─── Avatar uploader ─── */
function AvatarUploader({ currentUrl, name, onFileChange, onRemove }) {
    const inputRef = useRef();
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        onFileChange(file);
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const imgSrc = preview || currentUrl;

    return (
        <div className="flex items-center gap-5">
            <div className="relative" style={{ flexShrink: 0 }}>
                <img
                    src={imgSrc}
                    alt={name}
                    style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--border)' }}
                />
                <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="absolute btn btn-primary btn-icon"
                    style={{ bottom: 0, right: 0, width: 28, height: 28, borderRadius: '50%', padding: 0, minWidth: 0 }}
                    title="Ganti foto"
                >
                    <Camera size={14} />
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted">JPG, PNG, WEBP — maks 2MB</p>
                <div className="flex gap-2 flex-wrap">
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => inputRef.current.click()}>
                        <Camera size={13} /> Upload Foto
                    </button>
                    {(preview || (currentUrl && !currentUrl.includes('ui-avatars'))) && (
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => { setPreview(null); onRemove(); }}>
                            <X size={13} /> Hapus
                        </button>
                    )}
                </div>
            </div>
            <input ref={inputRef} type="file" accept="image/*" className="p-0" style={{ display: 'none' }} onChange={handleChange} />
        </div>
    );
}

/* ─── Password visibility toggle ─── */
function PasswordInput({ id, label, value, onChange, error, placeholder }) {
    const [show, setShow] = useState(false);
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className="relative">
                <input
                    id={id}
                    type={show ? 'text' : 'password'}
                    className="form-input"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{ paddingRight: '2.5rem' }}
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute"
                    style={{ right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-2)', display: 'flex', alignItems: 'center' }}
                >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>
            {error && <p className="field-error">{error}</p>}
        </div>
    );
}

/* ═══════════════ MAIN PAGE ═══════════════ */
export default function Edit({ user, status }) {
    const [removeAvatar, setRemoveAvatar] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    /* ── Info form ── */
    const infoForm = useForm({
        name: user.name ?? '',
        username: user.username ?? '',
        email: user.email ?? '',
        tagline: user.tagline ?? '',
        location: user.location ?? '',
        github_url: user.github_url ?? '',
        linkedin_url: user.linkedin_url ?? '',
        website_url: user.website_url ?? '',
        avatar: null,
        _remove_avatar: false,
    });

    const handleAvatarFile = (file) => {
        infoForm.setData('avatar', file);
        infoForm.setData('_remove_avatar', false);
        setRemoveAvatar(false);
    };

    const handleAvatarRemove = () => {
        infoForm.setData('avatar', null);
        infoForm.setData('_remove_avatar', true);
        setRemoveAvatar(true);
    };

    const submitInfo = (e) => {
        e.preventDefault();
        // Use post with _method:PATCH because file upload needs multipart
        infoForm.post(route('profile.update'), {
            forceFormData: true,
        });
    };

    /* ── Password form ── */
    const pwForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submitPw = (e) => {
        e.preventDefault();
        pwForm.post(route('profile.password'), {
            onSuccess: () => pwForm.reset(),
        });
    };

    /* ── Delete form ── */
    const delForm = useForm({ password: '' });
    const submitDelete = (e) => {
        e.preventDefault();
        delForm.delete(route('profile.destroy'));
    };

    return (
        <>
            <Head title="Edit Profil — AppSec Profile" />

            {/* ── Navbar ── */}
            <nav className="navbar">
                <div className="flex items-center gap-3">
                    <Shield size={22} className="text-green" />
                    <span className="font-bold text-gradient" style={{ letterSpacing: '0.04em' }}>APPSEC_HUB</span>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={route('dashboard')} className="btn btn-ghost btn-sm">
                        <ArrowLeft size={14} /> Dashboard
                    </Link>
                </div>
            </nav>

            <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem', maxWidth: '720px' }}>
                {/* Header */}
                <div className="mb-8 anim-1">
                    <h1 className="text-3xl font-black mb-1">Edit Profil</h1>
                    <p className="text-muted text-sm">Kelola informasi pribadi dan tampilan profil Anda.</p>
                </div>

                <Flash status={status} />

                {/* ── Section 1: Foto & Info Dasar ── */}
                <div className="flex flex-col gap-6 anim-2">
                    <Section title="Foto & Informasi Dasar" desc="Nama, username, dan foto profil yang ditampilkan di dashboard.">

                        <form onSubmit={submitInfo} encType="multipart/form-data">
                            {/* Avatar */}
                            <div className="mb-6">
                                <AvatarUploader
                                    currentUrl={user.avatar_url}
                                    name={user.name}
                                    onFileChange={handleAvatarFile}
                                    onRemove={handleAvatarRemove}
                                />
                            </div>

                            <div className="grid-2 mb-4">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <User size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-input"
                                        value={infoForm.data.name}
                                        onChange={e => infoForm.setData('name', e.target.value)}
                                    />
                                    {infoForm.errors.name && <p className="field-error">{infoForm.errors.name}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <AtSign size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-input"
                                        value={infoForm.data.username}
                                        onChange={e => infoForm.setData('username', e.target.value)}
                                        placeholder="contoh: dayy_sec"
                                    />
                                    {infoForm.errors.username && <p className="field-error">{infoForm.errors.username}</p>}
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="email">
                                    <Mail size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-input"
                                    value={infoForm.data.email}
                                    onChange={e => infoForm.setData('email', e.target.value)}
                                />
                                {infoForm.errors.email && <p className="field-error">{infoForm.errors.email}</p>}
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="tagline">Tagline</label>
                                <input
                                    id="tagline"
                                    type="text"
                                    className="form-input"
                                    value={infoForm.data.tagline}
                                    onChange={e => infoForm.setData('tagline', e.target.value)}
                                    placeholder="Aspiring Application Security Engineer"
                                />
                                <p className="form-hint">Tampil di bawah nama di profil Anda.</p>
                                {infoForm.errors.tagline && <p className="field-error">{infoForm.errors.tagline}</p>}
                            </div>

                            <div className="form-group mb-6">
                                <label htmlFor="location">
                                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                    Lokasi
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    className="form-input"
                                    value={infoForm.data.location}
                                    onChange={e => infoForm.setData('location', e.target.value)}
                                    placeholder="Jakarta, Indonesia"
                                />
                                {infoForm.errors.location && <p className="field-error">{infoForm.errors.location}</p>}
                            </div>

                            {/* Social Links */}
                            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                                <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-2)' }}>Tautan Sosial</p>
                                <div className="flex flex-col gap-3">
                                    <div className="form-group">
                                        <label htmlFor="github_url">
                                            <LinkIcon size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                            GitHub
                                        </label>
                                        <input
                                            id="github_url"
                                            type="url"
                                            className="form-input"
                                            value={infoForm.data.github_url}
                                            onChange={e => infoForm.setData('github_url', e.target.value)}
                                            placeholder="https://github.com/username"
                                        />
                                        {infoForm.errors.github_url && <p className="field-error">{infoForm.errors.github_url}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="linkedin_url">
                                            <LinkIcon size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                            LinkedIn
                                        </label>
                                        <input
                                            id="linkedin_url"
                                            type="url"
                                            className="form-input"
                                            value={infoForm.data.linkedin_url}
                                            onChange={e => infoForm.setData('linkedin_url', e.target.value)}
                                            placeholder="https://linkedin.com/in/username"
                                        />
                                        {infoForm.errors.linkedin_url && <p className="field-error">{infoForm.errors.linkedin_url}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website_url">
                                            <Globe size={12} style={{ display: 'inline', marginRight: '4px' }} />
                                            Website / Portfolio
                                        </label>
                                        <input
                                            id="website_url"
                                            type="url"
                                            className="form-input"
                                            value={infoForm.data.website_url}
                                            onChange={e => infoForm.setData('website_url', e.target.value)}
                                            placeholder="https://yoursite.dev"
                                        />
                                        {infoForm.errors.website_url && <p className="field-error">{infoForm.errors.website_url}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="btn btn-primary" disabled={infoForm.processing}>
                                    <Save size={15} />
                                    {infoForm.processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </button>
                            </div>
                        </form>
                    </Section>

                    {/* ── Section 2: Ganti Password ── */}
                    <Section title="Keamanan — Ganti Password" desc="Gunakan password yang kuat dengan kombinasi huruf, angka, dan simbol.">
                        <form onSubmit={submitPw}>
                            <PasswordInput
                                id="current_password"
                                label="Password Saat Ini"
                                value={pwForm.data.current_password}
                                onChange={e => pwForm.setData('current_password', e.target.value)}
                                error={pwForm.errors.current_password}
                            />
                            <div className="mt-4">
                                <PasswordInput
                                    id="new_password"
                                    label="Password Baru"
                                    value={pwForm.data.password}
                                    onChange={e => pwForm.setData('password', e.target.value)}
                                    error={pwForm.errors.password}
                                    placeholder="min. 8 karakter, huruf + angka"
                                />
                            </div>
                            <div className="mt-4 mb-6">
                                <PasswordInput
                                    id="password_confirmation"
                                    label="Konfirmasi Password Baru"
                                    value={pwForm.data.password_confirmation}
                                    onChange={e => pwForm.setData('password_confirmation', e.target.value)}
                                    error={pwForm.errors.password_confirmation}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="btn btn-primary" disabled={pwForm.processing}>
                                    <Lock size={15} />
                                    {pwForm.processing ? 'Memperbarui...' : 'Perbarui Password'}
                                </button>
                            </div>
                        </form>
                    </Section>

                    {/* ── Section 3: Hapus Akun ── */}
                    <Section title="Zona Berbahaya" desc="Tindakan ini permanen dan tidak bisa dibatalkan.">
                        {!showDeleteConfirm ? (
                            <button className="btn btn-danger" onClick={() => setShowDeleteConfirm(true)}>
                                <Trash2 size={15} /> Hapus Akun Saya
                            </button>
                        ) : (
                            <form onSubmit={submitDelete}>
                                <div className="card card-sm mb-4" style={{ borderColor: 'rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)' }}>
                                    <div className="flex gap-2 items-start mb-3">
                                        <AlertTriangle size={18} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <p className="text-sm text-muted">
                                            Akun <strong style={{ color: 'var(--text)' }}>{user.email}</strong> akan dihapus permanen bersama seluruh data profil Anda.
                                        </p>
                                    </div>
                                    <PasswordInput
                                        id="delete_password"
                                        label="Konfirmasi dengan Password Anda"
                                        value={delForm.data.password}
                                        onChange={e => delForm.setData('password', e.target.value)}
                                        error={delForm.errors.password}
                                    />
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <button type="button" className="btn btn-ghost" onClick={() => setShowDeleteConfirm(false)}>
                                        Batal
                                    </button>
                                    <button type="submit" className="btn btn-danger" disabled={delForm.processing}>
                                        <Trash2 size={14} />
                                        {delForm.processing ? 'Menghapus...' : 'Ya, Hapus Akun'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </Section>
                </div>
            </div>
        </>
    );
}
