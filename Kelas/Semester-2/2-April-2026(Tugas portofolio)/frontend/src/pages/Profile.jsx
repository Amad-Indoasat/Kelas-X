import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  User, MapPin, Mail, Phone, Globe, Code2,
  GraduationCap, Briefcase, Sparkles, ChevronDown,
  LogOut, Pencil, Save, X, Plus, Trash2, ExternalLink, Heart,
  Check, AlertCircle, Link as LinkIcon
} from 'lucide-react';

/* ──────────────────────────────────────────
   DEFAULT PROFILE DATA SHAPE
   ────────────────────────────────────────── */
const DEFAULT_PROFILE = {
  title: '',
  bio: '',
  location: '',
  school: '',
  status: '',
  language: '',
  focus: '',
  skills: [],
  timeline: [],
  contacts: [],
};

/* ──────────────────────────────────────────
   MAIN PROFILE COMPONENT
   ────────────────────────────────────────── */
export default function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Profile data from DB
  const profile = { ...DEFAULT_PROFILE, ...(user?.profile_data || {}) };
  const [form, setForm] = useState(profile);

  // Sync form when user changes
  useEffect(() => {
    setForm({ ...DEFAULT_PROFILE, ...(user?.profile_data || {}) });
  }, [user]);

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      await updateProfile({
        name: user.name,
        email: user.email,
        profile_data: form,
      });
      setEditing(false);
      setMessage({ type: 'success', text: 'Profil berhasil disimpan!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal menyimpan profil.' });
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setForm({ ...DEFAULT_PROFILE, ...(user?.profile_data || {}) });
    setEditing(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  // Field updater helpers
  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const addSkill = () => set('skills', [...form.skills, { emoji: '⭐', name: '', level: '' }]);
  const removeSkill = (i) => set('skills', form.skills.filter((_, idx) => idx !== i));
  const updateSkill = (i, field, val) => {
    const arr = [...form.skills];
    arr[i] = { ...arr[i], [field]: val };
    set('skills', arr);
  };

  const addTimeline = () => set('timeline', [...form.timeline, { year: '', role: '', place: '', desc: '' }]);
  const removeTimeline = (i) => set('timeline', form.timeline.filter((_, idx) => idx !== i));
  const updateTimeline = (i, field, val) => {
    const arr = [...form.timeline];
    arr[i] = { ...arr[i], [field]: val };
    set('timeline', arr);
  };

  const addContact = () => set('contacts', [...form.contacts, { icon: 'mail', label: '', value: '', href: '' }]);
  const removeContact = (i) => set('contacts', form.contacts.filter((_, idx) => idx !== i));
  const updateContact = (i, field, val) => {
    const arr = [...form.contacts];
    arr[i] = { ...arr[i], [field]: val };
    set('contacts', arr);
  };

  const contactIcons = {
    mail: <Mail size={22} />,
    phone: <Phone size={22} />,
    github: <LinkIcon size={22} />,
    instagram: <Heart size={22} />,
    globe: <Globe size={22} />,
  };

  const aboutItems = [
    { icon: <MapPin size={20} />, label: 'Lokasi', value: form.location, color: 'purple', key: 'location' },
    { icon: <GraduationCap size={20} />, label: 'Pendidikan', value: form.school, color: 'teal', key: 'school' },
    { icon: <Code2 size={20} />, label: 'Fokus', value: form.focus, color: 'warm', key: 'focus' },
    { icon: <Globe size={20} />, label: 'Bahasa', value: form.language, color: 'green', key: 'language' },
  ];

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="nav-brand">{'<' + (user?.name || 'Profile') + ' />'}</span>
          <div className="nav-right-group">
            {!editing ? (
              <button className="btn btn-outline btn-sm" onClick={() => setEditing(true)}>
                <Pencil size={14} /> Edit Profil
              </button>
            ) : (
              <>
                <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={saving}>
                  <Save size={14} /> {saving ? 'Menyimpan...' : 'Simpan'}
                </button>
                <button className="btn btn-outline btn-sm" onClick={handleCancel}>
                  <X size={14} /> Batal
                </button>
              </>
            )}
            <button className="btn btn-ghost" onClick={handleLogout} title="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── TOAST ── */}
      {message && (
        <div className={`toast ${message.type === 'success' ? 'toast-success' : 'toast-error'}`}>
          {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
          {message.text}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-in">
              {editing ? (
                <div className="edit-field-group">
                  <label className="edit-label">Status</label>
                  <input className="edit-input" value={form.status} onChange={(e) => set('status', e.target.value)} placeholder="Sedang apa sekarang..." />
                </div>
              ) : (
                form.status && <div className="hero-badge"><span className="dot" />{form.status}</div>
              )}

              <h1 className="hero-name">
                Hi, Saya <span className="accent">{user?.name || 'User'}</span>
              </h1>

              {editing ? (
                <>
                  <div className="edit-field-group">
                    <label className="edit-label">Title / Role</label>
                    <input className="edit-input" value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Developer, Pelajar, dsb." />
                  </div>
                  <div className="edit-field-group">
                    <label className="edit-label">Bio</label>
                    <textarea className="edit-textarea" rows={3} value={form.bio} onChange={(e) => set('bio', e.target.value)} placeholder="Ceritakan tentang diri kamu..." />
                  </div>
                </>
              ) : (
                <>
                  {form.title && <p className="hero-title">{form.title}</p>}
                  {form.bio && <p className="hero-bio">{form.bio}</p>}
                </>
              )}

              {!editing && (
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-primary">
                    <Mail size={16} /> Hubungi Saya
                  </a>
                  <a href="#about" className="btn btn-outline">
                    Tentang Saya <ChevronDown size={16} />
                  </a>
                </div>
              )}
            </div>

            <div className="hero-avatar-wrapper animate-in animate-delay-2">
              <div className="hero-avatar-glow" />
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  <User size={80} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header animate-in">
            <div className="section-label"><Sparkles size={14} /> Tentang Saya</div>
            <h2 className="section-title">Siapa saya?</h2>
          </div>

          <div className="about-grid">
            {aboutItems.map((item, i) => (
              <div key={i} className={`card about-card animate-in animate-delay-${Math.min(i + 1, 5)}`}>
                <div className={`about-icon ${item.color}`}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="about-label">{item.label}</div>
                  {editing ? (
                    <input className="edit-input edit-input-sm" value={item.value} onChange={(e) => set(item.key, e.target.value)} placeholder={`Masukkan ${item.label.toLowerCase()}...`} />
                  ) : (
                    <div className="about-value">{item.value || <span className="text-dim">Belum diisi</span>}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header animate-in">
            <div className="section-label"><Code2 size={14} /> Skills & Interests</div>
            <h2 className="section-title">Yang sedang saya pelajari</h2>
          </div>

          <div className="skills-grid">
            {form.skills.map((skill, i) => (
              <div key={i} className={`skill-pill animate-in animate-delay-${Math.min(i + 1, 5)}`}>
                {editing ? (
                  <div className="skill-edit-row">
                    <input className="edit-input edit-input-xs" value={skill.emoji} onChange={(e) => updateSkill(i, 'emoji', e.target.value)} style={{ width: '50px', textAlign: 'center' }} />
                    <input className="edit-input edit-input-xs" value={skill.name} onChange={(e) => updateSkill(i, 'name', e.target.value)} placeholder="Nama skill" style={{ flex: 1 }} />
                    <input className="edit-input edit-input-xs" value={skill.level} onChange={(e) => updateSkill(i, 'level', e.target.value)} placeholder="Level" style={{ width: '80px' }} />
                    <button className="btn-remove" onClick={() => removeSkill(i)}><Trash2 size={14} /></button>
                  </div>
                ) : (
                  <>
                    <span className="skill-emoji">{skill.emoji}</span>
                    <div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-level">{skill.level}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {editing && (
            <button className="btn btn-outline btn-add" onClick={addSkill}>
              <Plus size={16} /> Tambah Skill
            </button>
          )}

          {!editing && form.skills.length === 0 && (
            <p className="empty-hint">Belum ada skill. Klik "Edit Profil" untuk menambahkan.</p>
          )}
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section id="journey" className="section">
        <div className="container">
          <div className="section-header animate-in">
            <div className="section-label"><Briefcase size={14} /> Perjalanan</div>
            <h2 className="section-title">Timeline saya</h2>
          </div>

          <div className="timeline">
            {form.timeline.map((item, i) => (
              <div key={i} className={`timeline-item animate-in animate-delay-${Math.min(i + 1, 5)}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  {editing ? (
                    <div className="timeline-edit">
                      <div className="edit-row-2">
                        <div className="edit-field-group">
                          <label className="edit-label">Tahun</label>
                          <input className="edit-input edit-input-sm" value={item.year} onChange={(e) => updateTimeline(i, 'year', e.target.value)} placeholder="2025" />
                        </div>
                        <div className="edit-field-group">
                          <label className="edit-label">Role/Kegiatan</label>
                          <input className="edit-input edit-input-sm" value={item.role} onChange={(e) => updateTimeline(i, 'role', e.target.value)} placeholder="Apa yang dilakukan" />
                        </div>
                      </div>
                      <div className="edit-field-group">
                        <label className="edit-label">Tempat</label>
                        <input className="edit-input edit-input-sm" value={item.place} onChange={(e) => updateTimeline(i, 'place', e.target.value)} placeholder="Sekolah, perusahaan, dsb." />
                      </div>
                      <div className="edit-field-group">
                        <label className="edit-label">Deskripsi</label>
                        <textarea className="edit-textarea edit-textarea-sm" rows={2} value={item.desc} onChange={(e) => updateTimeline(i, 'desc', e.target.value)} placeholder="Detail singkat..." />
                      </div>
                      <button className="btn-remove" onClick={() => removeTimeline(i)}><Trash2 size={14} /> Hapus</button>
                    </div>
                  ) : (
                    <>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-role">{item.role}</div>
                      <div className="timeline-place">{item.place}</div>
                      {item.desc && <div className="timeline-desc">{item.desc}</div>}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {editing && (
            <button className="btn btn-outline btn-add" onClick={addTimeline}>
              <Plus size={16} /> Tambah Timeline
            </button>
          )}

          {!editing && form.timeline.length === 0 && (
            <p className="empty-hint">Belum ada timeline. Klik "Edit Profil" untuk menambahkan.</p>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header animate-in">
            <div className="section-label"><Mail size={14} /> Kontak</div>
            <h2 className="section-title">Hubungi saya</h2>
          </div>

          <div className="contact-grid">
            {form.contacts.map((c, i) => (
              editing ? (
                <div key={i} className="card contact-edit-card">
                  <div className="edit-field-group">
                    <label className="edit-label">Tipe</label>
                    <select className="edit-input edit-input-sm" value={c.icon} onChange={(e) => updateContact(i, 'icon', e.target.value)}>
                      <option value="mail">Email</option>
                      <option value="phone">Telepon</option>
                      <option value="github">GitHub</option>
                      <option value="instagram">Instagram</option>
                      <option value="globe">Website</option>
                    </select>
                  </div>
                  <div className="edit-field-group">
                    <label className="edit-label">Label</label>
                    <input className="edit-input edit-input-sm" value={c.label} onChange={(e) => updateContact(i, 'label', e.target.value)} placeholder="Email, GitHub, dsb." />
                  </div>
                  <div className="edit-field-group">
                    <label className="edit-label">Nilai</label>
                    <input className="edit-input edit-input-sm" value={c.value} onChange={(e) => updateContact(i, 'value', e.target.value)} placeholder="nama@email.com" />
                  </div>
                  <div className="edit-field-group">
                    <label className="edit-label">Link (href)</label>
                    <input className="edit-input edit-input-sm" value={c.href} onChange={(e) => updateContact(i, 'href', e.target.value)} placeholder="https://..." />
                  </div>
                  <button className="btn-remove" onClick={() => removeContact(i)}><Trash2 size={14} /> Hapus</button>
                </div>
              ) : (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                   className={`contact-card animate-in animate-delay-${Math.min(i + 1, 5)}`}>
                  <div className="contact-icon">{contactIcons[c.icon] || <Globe size={22} />}</div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                  <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-dim)' }} />
                </a>
              )
            ))}
          </div>

          {editing && (
            <button className="btn btn-outline btn-add" onClick={addContact}>
              <Plus size={16} /> Tambah Kontak
            </button>
          )}

          {!editing && form.contacts.length === 0 && (
            <p className="empty-hint">Belum ada kontak. Klik "Edit Profil" untuk menambahkan.</p>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Dibuat dengan <span className="heart">♥</span> oleh {user?.name || 'You'} · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
