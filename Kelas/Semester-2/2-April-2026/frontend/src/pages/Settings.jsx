import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../api';
import { 
  Settings as SettingsIcon, User, Lock, Bell, 
  Shield, ArrowLeft, Save, Trash2, Database, Plus, Code
} from 'lucide-react';

export default function Settings() {
  const { user, fetchUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('general');

  const profile = user?.profile_data || {};

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    profile_data: {
      bio: profile.bio || '',
      title: profile.title || '',
      level: profile.level || '',
      status: profile.status || '',
      clearance: profile.clearance || '',
      focus: profile.focus || '',
      location: profile.location || '',
      joined: profile.joined || new Date().toISOString().substring(0, 7),
      skills: profile.skills || [],
      roadmap: profile.roadmap || [],
      socials: profile.socials || []
    }
  });

  const updateProfile = (key, value) => {
    setFormData(prev => ({
      ...prev,
      profile_data: { ...prev.profile_data, [key]: value }
    }));
  };

  // Helper functions for dynamic arrays
  const addItem = (arrayName, defaultObj) => {
    setFormData(prev => ({
      ...prev,
      profile_data: {
        ...prev.profile_data,
        [arrayName]: [...(prev.profile_data[arrayName] || []), defaultObj]
      }
    }));
  };

  const updateItem = (arrayName, index, key, value) => {
    setFormData(prev => {
      const newArray = [...(prev.profile_data[arrayName] || [])];
      newArray[index] = { ...newArray[index], [key]: value };
      return {
        ...prev,
        profile_data: {
          ...prev.profile_data,
          [arrayName]: newArray
        }
      };
    });
  };

  const removeItem = (arrayName, index) => {
    setFormData(prev => {
      const newArray = [...(prev.profile_data[arrayName] || [])];
      newArray.splice(index, 1);
      return {
        ...prev,
        profile_data: {
          ...prev.profile_data,
          [arrayName]: newArray
        }
      };
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    try {
      await api.put('/profile', formData);
      await fetchUser();
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: err?.response?.data?.message || 'Error updating profile' });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <>
      <nav className="navbar glass">
        <div className="nav-left">
          <button className="btn btn-ghost btn-icon" onClick={() => navigate('/profile')}>
            <ArrowLeft size={20} />
          </button>
          <span className="nav-brand text-gradient">SETTINGS</span>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="grid-2" style={{ gridTemplateColumns: 'minmax(200px, 1fr) 3fr' }}>
          
          {/* Sidebar */}
          <aside className="anim-1">
            <div className="flex flex-col gap-2">
              <button 
                className={`btn ${activeTab === 'general' ? 'btn-primary' : 'btn-ghost'} justify-start w-full`}
                onClick={() => setActiveTab('general')}
              >
                <User size={18} /> General Setup
              </button>
              <button 
                className={`btn ${activeTab === 'advanced' ? 'btn-primary' : 'btn-ghost'} justify-start w-full`}
                onClick={() => setActiveTab('advanced')}
              >
                <Database size={18} /> Advanced Data
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="anim-2">
            <div className="card card-lg glass-premium">
              <h2 className="section-title">
                {activeTab === 'general' ? <SettingsIcon size={22} className="text-cyan" /> : <Database size={22} className="text-cyan" />}
                {activeTab === 'general' ? ' GENERAL SETTINGS' : ' ADVANCED DATA'}
              </h2>

              {message && (
                <div className={`flash ${message.type === 'success' ? 'badge-green' : 'flash-error'}`} style={{ marginBottom: '2rem', padding: '1rem' }}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSave} className="auth-form">
                
                {activeTab === 'general' && (
                  <>
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Full Name</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Email</label>
                        <input 
                          type="email" 
                          className="form-input glass" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid-2">
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Title / Role</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.title}
                          onChange={(e) => updateProfile('title', e.target.value)}
                          placeholder="e.g. Web Developer"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Focus Area</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.focus}
                          onChange={(e) => updateProfile('focus', e.target.value)}
                          placeholder="e.g. Frontend React"
                        />
                      </div>
                    </div>

                    <div className="grid-3">
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Level</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.level}
                          onChange={(e) => updateProfile('level', e.target.value)}
                          placeholder="e.g. Mid-Senior"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Status</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.status}
                          onChange={(e) => updateProfile('status', e.target.value)}
                          placeholder="e.g. Active"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Role (Clearance)</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.clearance}
                          onChange={(e) => updateProfile('clearance', e.target.value)}
                          placeholder="e.g. Staff"
                        />
                      </div>
                    </div>

                    <div className="grid-2">
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Location</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.location}
                          onChange={(e) => updateProfile('location', e.target.value)}
                          placeholder="e.g. Tokyo, Japan"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-xs uppercase tracking-widest font-bold">Joined Date</label>
                        <input 
                          type="text" 
                          className="form-input glass" 
                          value={formData.profile_data.joined}
                          onChange={(e) => updateProfile('joined', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="text-xs uppercase tracking-widest font-bold">Bio</label>
                      <textarea 
                        className="form-input glass" 
                        rows="3" 
                        style={{ resize: 'none' }}
                        value={formData.profile_data.bio}
                        onChange={(e) => updateProfile('bio', e.target.value)}
                        placeholder="Tell the world about who you are..."
                      />
                    </div>
                  </>
                )}

                {activeTab === 'advanced' && (
                  <>
                    <p className="text-muted text-sm mb-6">Manage your dynamic profile lists sequentially.</p>
                    
                    {/* Skills Array Builder */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-xs uppercase tracking-widest font-bold text-cyan flex items-center gap-2"><Code size={14}/> Core Skills</label>
                        <button type="button" onClick={() => addItem('skills', {title: '', desc: '', progress: 50})} className="btn btn-ghost btn-sm text-cyan" style={{ padding: '0.2rem 0.5rem', minHeight: 0 }}>
                          <Plus size={14} /> Add
                        </button>
                      </div>
                      <div className="flex flex-col gap-3">
                        {(formData.profile_data.skills || []).length === 0 && <p className="text-xs text-dim italic">No skills added yet.</p>}
                        {(formData.profile_data.skills || []).map((skill, idx) => (
                          <div key={`skill_${idx}`} className="glass p-4 rounded-lg relative border border-gray-800">
                            <button type="button" onClick={() => removeItem('skills', idx)} className="absolute top-2 right-2 text-red hover:opacity-100 opacity-50 p-1" title="Remove">
                              <Trash2 size={16}/>
                            </button>
                            <div className="flex gap-3 mb-3 pr-8">
                              <div className="flex-1">
                                <label className="text-[10px] text-dim uppercase">Skill Title</label>
                                <input type="text" className="form-input bg-black/20 border border-gray-800 text-sm py-1" placeholder="e.g. React.js" value={skill.title} onChange={e => updateItem('skills', idx, 'title', e.target.value)} />
                              </div>
                              <div style={{ width: '100px' }}>
                                <label className="text-[10px] text-dim uppercase">Progress %</label>
                                <input type="number" className="form-input bg-black/20 border border-gray-800 text-sm py-1" placeholder="80" value={skill.progress} onChange={e => updateItem('skills', idx, 'progress', e.target.value)} />
                              </div>
                            </div>
                            <label className="text-[10px] text-dim uppercase">Skill Description</label>
                            <input type="text" className="form-input bg-black/20 border border-gray-800 text-sm py-1" placeholder="Brief description of your expertise..." value={skill.desc} onChange={e => updateItem('skills', idx, 'desc', e.target.value)} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Roadmap Array Builder */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-xs uppercase tracking-widest font-bold text-cyan flex items-center gap-2"><SettingsIcon size={14}/> Career Roadmap</label>
                        <button type="button" onClick={() => addItem('roadmap', {year: '', title: '', status: 'current'})} className="btn btn-ghost btn-sm text-cyan" style={{ padding: '0.2rem 0.5rem', minHeight: 0 }}>
                          <Plus size={14} /> Add
                        </button>
                      </div>
                      <div className="flex flex-col gap-3">
                        {(formData.profile_data.roadmap || []).length === 0 && <p className="text-xs text-dim italic">No roadmap items added yet.</p>}
                        {(formData.profile_data.roadmap || []).map((rm, idx) => (
                          <div key={`rm_${idx}`} className="glass p-4 rounded-lg relative border border-gray-800 flex gap-3 pr-8 items-end">
                            <button type="button" onClick={() => removeItem('roadmap', idx)} className="absolute top-2 right-2 text-red hover:opacity-100 opacity-50 p-1" title="Remove">
                              <Trash2 size={16}/>
                            </button>
                            <div className="flex-1">
                              <label className="text-[10px] text-dim uppercase">Phase / Year</label>
                              <input type="text" className="form-input bg-black/20 border border-gray-800 text-sm py-1" placeholder="e.g. 2024" value={rm.year} onChange={e => updateItem('roadmap', idx, 'year', e.target.value)} />
                            </div>
                            <div className="flex-[2]">
                              <label className="text-[10px] text-dim uppercase">Milestone Title</label>
                              <input type="text" className="form-input bg-black/20 border border-gray-800 text-sm py-1" placeholder="e.g. Senior Promotion" value={rm.title} onChange={e => updateItem('roadmap', idx, 'title', e.target.value)} />
                            </div>
                            <div className="flex-1">
                              <label className="text-[10px] text-dim uppercase">Status</label>
                              <select className="form-input bg-black/20 border border-gray-800 text-sm py-1 px-2" value={rm.status} onChange={e => updateItem('roadmap', idx, 'status', e.target.value)}>
                                <option value="completed" className="bg-gray-900">Completed</option>
                                <option value="current" className="bg-gray-900">Current</option>
                                <option value="locked" className="bg-gray-900">Future (Locked)</option>
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Socials Array Builder */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-xs uppercase tracking-widest font-bold text-cyan flex items-center gap-2"><Bell size={14}/> Social Links</label>
                        <button type="button" onClick={() => addItem('socials', {name: '', url: ''})} className="btn btn-ghost btn-sm text-cyan" style={{ padding: '0.2rem 0.5rem', minHeight: 0 }}>
                          <Plus size={14} /> Add
                        </button>
                      </div>
                      <div className="flex flex-col gap-2">
                        {(formData.profile_data.socials || []).length === 0 && <p className="text-xs text-dim italic">No social links added yet.</p>}
                        {(formData.profile_data.socials || []).map((soc, idx) => (
                          <div key={`soc_${idx}`} className="glass p-2 rounded-lg flex items-center gap-2 border border-gray-800">
                            <input type="text" className="form-input bg-transparent border-none text-sm w-1/3 py-1" placeholder="Platform (e.g. GitHub)" value={soc.name} onChange={e => updateItem('socials', idx, 'name', e.target.value)} />
                            <div className="w-px h-6 bg-gray-800"></div>
                            <input type="url" className="form-input bg-transparent border-none text-sm flex-1 py-1" placeholder="https://..." value={soc.url} onChange={e => updateItem('socials', idx, 'url', e.target.value)} />
                            <button type="button" onClick={() => removeItem('socials', idx)} className="btn btn-ghost btn-icon text-red opacity-80" style={{ minWidth: 0, padding: '0.4rem' }}>
                              <Trash2 size={16}/>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                  </>
                )}

                <div className="flex justify-between items-center mt-8 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <button className="btn btn-ghost text-red" type="button" onClick={() => api.post('/logout').then(() => navigate('/'))}>
                     Logout
                  </button>
                  <button className="btn btn-primary" type="submit" disabled={loading}>
                    <Save size={18} /> {loading ? 'Saving...' : 'Update Settings'}
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
