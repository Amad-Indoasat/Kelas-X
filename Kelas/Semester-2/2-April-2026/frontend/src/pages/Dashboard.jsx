import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Shield, Terminal, Code, Network, Target,
  LogOut, Settings, ChevronRight, CheckCircle2, Lock
} from 'lucide-react';

function DotIcon({ status }) {
  if (status === 'completed') return <CheckCircle2 size={16} />;
  if (status === 'current')   return <ChevronRight size={16} />;
  return <Lock size={14} />;
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // Default data for demo
  const careerProfile = {
    title: 'Application Security Engineer',
    bio: 'Passionate about securing web applications and finding vulnerabilities before the bad actors do.',
    level: 'Mid-Senior',
    status: 'Active',
    clearance: 'Level 3',
    focus: 'Web AppSec',
    skills: [
      { title: 'Penetration Testing', desc: 'Web application security assessment', progress: 85 },
      { title: 'Code Review', desc: 'Static analysis & secure coding', progress: 75 },
      { title: 'Threat Modeling', desc: 'STRIDE, DREAD frameworks', progress: 60 },
    ],
    roadmap: [
      { year: 'Phase 1', title: 'OWASP Top 10 Mastery', status: 'completed' },
      { year: 'Phase 2', title: 'Bug Bounty Programs', status: 'current' },
      { year: 'Phase 3', title: 'Red Team Operations', status: 'locked' },
    ],
  };

  const stats = [
    { label: 'Level', val: careerProfile.level },
    { label: 'Status', val: careerProfile.status },
    { label: 'Clearance', val: careerProfile.clearance },
    { label: 'Focus', val: careerProfile.focus },
  ];

  const iconMap = ['#', '◈', '⬡'];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Shield size={24} className="text-green" />
          <span className="nav-brand text-gradient">DASHBOARD</span>
        </div>
        <div className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
        </div>
        <div className="nav-right">
          <button className="user-chip" onClick={() => navigate('/profile')}>
            <span>{user?.name}</span>
            <Settings size={13} style={{ opacity: 0.5 }} />
          </button>
          <button className="btn btn-ghost btn-icon btn-sm" title="Logout" onClick={handleLogout}>
            <LogOut size={16} className="text-red" />
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>

        {/* Hero */}
        <section id="overview" className="anim-1 mb-8">
          <div className="card card-lg relative overflow-hidden">
            <div className="absolute" style={{ right: -40, top: -40, opacity: 0.06, color: 'var(--green)' }}>
              <Shield size={280} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="badge badge-green pulse" style={{ marginBottom: '1.5rem' }}>
                <Terminal size={12} /> ACTIVE PROFILE
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

        {/* Terminal Widget */}
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
              <div className="t-output">{user?.name} — {careerProfile.title}</div>
              <div><span className="t-prompt">❯ </span><span className="t-cmd">status --clearance</span></div>
              <div className="t-info">Clearance: {careerProfile.clearance} | Focus: {careerProfile.focus}</div>
              <div><span className="t-prompt">❯ </span><span className="t-cmd">_</span></div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="anim-3 mb-8">
          <h2 className="section-title">
            <span className="text-green"><Code size={22} /></span> Core Security Matrix
          </h2>
          <div className="grid-3">
            {careerProfile.skills.map((skill, i) => (
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
                    <span className="text-xs text-dim">Proficiency</span>
                    <span className="text-xs font-bold text-green">{skill.progress}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="anim-4 mb-8">
          <h2 className="section-title">
            <span className="text-green"><Target size={22} /></span> Career Roadmap
          </h2>
          <div className="card card-lg">
            <div className="timeline">
              {careerProfile.roadmap.map((item, i) => {
                const dotCls = item.status === 'completed' ? 'done' : item.status === 'current' ? 'current' : 'locked';
                return (
                  <div key={i} className="timeline-item">
                    <div className={`timeline-dot ${dotCls}`}>
                      <DotIcon status={item.status} />
                    </div>
                    <div className={`timeline-content ${item.status === 'current' ? 'is-current' : ''}`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-bold">{item.title}</span>
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
        </section>

        {/* Connect */}
        <section className="anim-4">
          <div className="card card-lg" style={{ borderColor: 'rgba(6,182,212,0.2)' }}>
            <h2 className="section-title">
              <span className="text-cyan"><Network size={22} /></span> Connect & Profiles
            </h2>
            <div className="grid-2">
              {user?.email && (
                <a href={`mailto:${user.email}`} className="btn btn-ghost justify-start text-left" style={{ textTransform: 'none' }}>
                  📧 <span className="truncate">{user.email}</span>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
