import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, Mail, Calendar, Shield, MapPin, 
  Code, Send, ExternalLink, ArrowLeft, Edit3
} from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const profile = user?.profile_data || {};
  const profileData = {
    location: profile.location || 'Location Not Set',
    joined: profile.joined || 'Unknown',
    bio: profile.bio || 'Bio protocol empty. Please update credentials.',
    socials: profile.socials || []
  };

  return (
    <>
      <nav className="navbar glass">
        <div className="nav-left">
          <button className="btn btn-ghost btn-icon" onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={20} />
          </button>
          <span className="nav-brand text-gradient">USER PROFILE</span>
        </div>
        <div className="nav-right">
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/settings')}>
            <Edit3 size={14} /> Update Credentials
          </button>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Left Column: Avatar & Basic Info */}
          <section className="anim-1">
            <div className="card card-lg flex flex-col items-center text-center glass-premium">
              <div className="relative mb-8 avatar-frame">
                <div className="avatar-glow-premium" style={{ width: '140px', height: '140px' }}>
                  <div className="avatar-inner" style={{ width: '132px', height: '132px' }}>
                    <User size={70} className="text-cyan" />
                  </div>
                </div>
                <div className="absolute" style={{ bottom: '10px', right: '10px', zIndex: 10 }}>
                  <div className="badge badge-green pulse" style={{ borderRadius: '50%', width: '16px', height: '16px', padding: 0, border: '2px solid var(--bg-terminal)' }} />
                </div>
              </div>

              <div className="mb-6">
                <h1 className="text-4xl font-black mb-1">{user?.name}</h1>
                <p className="text-cyan font-mono text-sm tracking-widest uppercase">ID: {user?.id || '01'}-USER</p>
              </div>
              
              <div className="flex gap-3 mb-8">
                <div className="badge badge-green">VERIFIED USER</div>
                <div className="badge badge-cyan">LEVEL 3</div>
              </div>

              <div className="glass p-6 rounded-xl w-full text-left mb-8">
                <p className="text-xs text-dim uppercase tracking-tighter mb-2 font-bold">Bio</p>
                <p className="text-muted text-sm" style={{ lineHeight: 1.7 }}>
                  {profileData.bio}
                </p>
              </div>

              <div className="flex gap-6">
                {profileData.socials.map((soc, i) => (
                  <a key={i} href={soc.url} className="btn btn-ghost btn-icon" style={{ padding: '0.75rem' }} target="_blank" rel="noreferrer" title={soc.name}>
                    <ExternalLink size={18} />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Right Column: Details & Stats */}
          <div className="flex flex-col gap-6">
            <section className="anim-2">
              <div className="card glass">
                <h3 className="section-title text-sm" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                  <Shield size={16} className="text-green" /> BASIC DETAILS
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 glass rounded-lg"><Mail size={18} className="text-dim" /></div>
                    <div>
                      <div className="text-xs text-dim uppercase font-bold tracking-tighter">Email</div>
                      <div className="text-sm font-mono">{user?.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 glass rounded-lg"><MapPin size={18} className="text-dim" /></div>
                    <div>
                      <div className="text-xs text-dim uppercase font-bold tracking-tighter">Location</div>
                      <div className="text-sm font-mono">{profileData.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 glass rounded-lg"><Calendar size={18} className="text-dim" /></div>
                    <div>
                      <div className="text-xs text-dim uppercase font-bold tracking-tighter">Joined Date</div>
                      <div className="text-sm font-mono">{profileData.joined}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="anim-3">
              <div className="card glass">
                <h3 className="section-title text-sm" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                  <Code size={16} className="text-cyan" /> ACCESS DETAILS
                </h3>
                <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="stat-box glass">
                    <div className="stat-lbl">Role</div>
                    <div className="stat-val text-green font-mono">{profile.clearance || 'USER'}</div>
                  </div>
                  <div className="stat-box glass">
                    <div className="stat-lbl">Availability</div>
                    <div className="stat-val text-cyan font-mono">ACTIVE</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="anim-4">
              <div className="card glass-premium" style={{ borderLeft: '4px solid var(--emerald-500)' }}>
                <div className="flex items-center gap-4">
                  <Shield size={32} className="text-green opacity-50" />
                  <div>
                    <h4 className="font-bold text-sm">ACCOUNT STATUS</h4>
                    <p className="text-xs text-muted">Account active and verified</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
