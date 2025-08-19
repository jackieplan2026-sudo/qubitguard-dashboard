import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  FiHome, FiShield, FiSettings, FiUsers, FiMail, FiEdit3, 
  FiFileText, FiMusic, FiBook, FiClock, FiStar, FiMenu,
  FiX, FiLock, FiEye
} from 'react-icons/fi';

const sidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: FiHome, path: '/' },
  { id: 'verification', name: 'Verification', icon: FiShield, path: '/verification' },
  { id: 'settings', name: 'Settings', icon: FiSettings, path: '/settings' },
  { id: 'moderation', name: 'Moderation', icon: FiUsers, path: '/moderation' },
  { id: 'welcomer', name: 'Welcomer Builder', icon: FiMail, path: '/welcomer' },
  { id: 'embed', name: 'Embed Builder', icon: FiEdit3, path: '/embed' },
  { id: 'audit', name: 'Audit Logs', icon: FiFileText, path: '/audit' },
  { id: 'advanced-audit', name: 'Advanced Audit', icon: FiEye, path: '/advanced-audit', restricted: '1105878515599036416' },
  { id: 'music', name: 'Music', icon: FiMusic, path: '/music' },
  { id: 'whats-new', name: "What's New", icon: FiStar, path: '/whats-new' },
  { id: 'coming-soon', name: 'Coming Soon', icon: FiClock, path: '/coming-soon' },
  { id: 'documentation', name: 'Documentation', icon: FiBook, path: '/documentation' },
];

export default function Layout({ children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  const canAccessItem = (item) => {
    if (!item.restricted) return true;
    return user && user.id === item.restricted;
  };

  return (
    <div className="min-h-screen relative">
      {/* Northern Lights Background */}
      <div className="northern-lights-bg"></div>
      <div className="aurora-layer-1"></div>
      <div className="aurora-layer-2"></div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-[60] md:hidden bg-slate-800/80 backdrop-blur-md p-2 rounded-lg text-white"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-700/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FiShield className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">QUBITGUARD</h1>
              <p className="text-xs text-slate-400">Quantum Security</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        {user && (
          <div className="p-4 border-b border-slate-700/30">
            <div className="flex items-center space-x-3">
              {user.avatar ? (
                <img
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <FiUsers className="text-white text-sm" />
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-white">{user.username}</p>
                <p className="text-xs text-slate-400">#{user.discriminator}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            if (!canAccessItem(item)) return null;
            
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="sidebar-item-icon" />
                <span className="font-medium">{item.name}</span>
                {item.restricted && (
                  <FiLock className="ml-auto text-amber-400" size={16} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bot Status */}
        <div className="p-4 border-t border-slate-700/30">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Bot Status</span>
            <div className="flex items-center space-x-2">
              <div className="status-online"></div>
              <span className="text-sm text-emerald-400">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>

      {/* Footer */}
      <footer className="footer ml-72">
        <div className="max-w-6xl mx-auto px-4">
          {/* Copyright */}
          <div className="text-center mb-6">
            <p className="text-slate-300 text-sm">
              ©2025 QUBITGUARD. All Rights Reserved. Made With 💚 For The Discord Community
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <a
              href="https://discord.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Discord ToS
            </a>
            <a
              href="https://discord.com/guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Discord Guidelines
            </a>
            <a
              href="https://discord.com/developers/docs/legal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Developer ToS
            </a>
            <a
              href="https://discord.com/developers/docs/legal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Developer Policy
            </a>
            <a
              href="https://discord.gg/YOUR_SUPPORT_SERVER"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Support Server
            </a>
          </div>

          {/* Bot Terms */}
          <div className="text-center mt-6 pt-4 border-t border-slate-700/30">
            <p className="text-xs text-slate-400">
              QUBITGUARD Bot Terms of Service and Compliance
            </p>
            <p className="text-xs text-slate-500 mt-1">
              This bot is fully compliant with Discord's Terms of Service and Developer Policy
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
