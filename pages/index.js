import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  FiShield, FiUsers, FiLock, FiActivity, FiZap, FiStar,
  FiHeart, FiTrendingUp, FiEye, FiRefreshCw
} from 'react-icons/fi';

export default function Dashboard({ user }) {
  const [stats, setStats] = useState({
    guilds: 0,
    users: 0,
    commands: 0,
    uptime: '0d 0h 0m'
  });

  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 0,
    commandsToday: 0,
    moderationActions: 0,
    systemHealth: 100
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        activeUsers: Math.floor(Math.random() * 500) + 100,
        commandsToday: Math.floor(Math.random() * 1000) + 500,
        moderationActions: Math.floor(Math.random() * 50) + 10,
        systemHealth: Math.floor(Math.random() * 10) + 95
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="qubitguard-title">
            🛡️ QUBITGUARD
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Quantum-Grade Discord Security & Moderation Bot
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Protect your Discord server with advanced security features, powerful moderation tools, 
            and comprehensive automation - all designed with the Discord community in mind.
          </p>
          
          {/* Invite Button */}
          <div className="flex justify-center mb-8">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="invite-btn text-lg"
            >
              🚀 Invite QUBITGUARD to Your Server
            </a>
          </div>

          {/* Security Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-blue-500/30">
              <FiShield className="text-6xl text-blue-400" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FiShield className="text-blue-400" />}
            title="Advanced Security"
            description="Protect your Discord server with best-in-class moderation tools and quantum-grade security features."
          />
          <FeatureCard
            icon={<FiUsers className="text-green-400" />}
            title="Smart Moderation"
            description="Set up automated rules, monitor activity, and use advanced security features for complete protection."
          />
          <FeatureCard
            icon={<FiLock className="text-purple-400" />}
            title="Anti-Nuke Protection"
            description="Sleep soundly knowing your server is protected with customizable limits and instant nuke detection."
          />
          <FeatureCard
            icon={<FiActivity className="text-yellow-400" />}
            title="Anti-Raid System"
            description="Advanced bot raid protection with customizable parameters and automated responses."
          />
          <FeatureCard
            icon={<FiZap className="text-cyan-400" />}
            title="Reaction Roles"
            description="Set up reaction roles where users can get roles by simply clicking a button."
          />
          <FeatureCard
            icon={<FiStar className="text-orange-400" />}
            title="XP & Rewards"
            description="Track and reward your most active users with XP points and automatic role assignments."
          />
        </div>

        {/* Real-Time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Users"
            value={realTimeData.activeUsers.toLocaleString()}
            icon={<FiUsers className="text-green-400" />}
            trend="+5.2%"
          />
          <StatCard
            title="Commands Today"
            value={realTimeData.commandsToday.toLocaleString()}
            icon={<FiZap className="text-blue-400" />}
            trend="+12.8%"
          />
          <StatCard
            title="Moderation Actions"
            value={realTimeData.moderationActions.toString()}
            icon={<FiShield className="text-red-400" />}
            trend="-2.1%"
          />
          <StatCard
            title="System Health"
            value={`${realTimeData.systemHealth}%`}
            icon={<FiActivity className="text-emerald-400" />}
            trend="Perfect"
          />
        </div>

        {/* Bot Features */}
        <div className="quantum-card">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FiStar className="mr-3 text-yellow-400" />
            What QUBITGUARD Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <BotFeature
                icon="🛡️"
                title="Powerful Moderation"
                description="Set up automated rules and restrictions with advanced security features"
              />
              <BotFeature
                icon="🚫"
                title="Anti-Nuke Protection"
                description="Customizable limits and punishments for those who try to abuse permissions"
              />
              <BotFeature
                icon="⚡"
                title="Anti-Raid System"
                description="Beast Mode, Anti-Spam, and Recovery System - all free to use"
              />
              <BotFeature
                icon="🎭"
                title="Custom Bot Avatar"
                description="Change the avatar and name of QUBITGUARD to personalize your server"
              />
            </div>
            <div className="space-y-4">
              <BotFeature
                icon="🔄"
                title="Reaction Roles"
                description="Users can get roles by simply clicking buttons - easy setup and management"
              />
              <BotFeature
                icon="⭐"
                title="XP & Level System"
                description="Track and reward your most active users with points and automatic roles"
              />
              <BotFeature
                icon="📺"
                title="Stream Alerts"
                description="Set up Twitch and YouTube alerts to notify members when you go live"
              />
              <BotFeature
                icon="🎵"
                title="Advanced Music System"
                description="24/7 music with DJ roles, filters, playlists, and multi-platform support"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickActionCard
            title="Get Started"
            description="Add QUBITGUARD to your server and start securing your community"
            buttonText="Invite Bot"
            buttonClass="btn-quantum"
          />
          <QuickActionCard
            title="Documentation"
            description="Learn about all features and commands available in QUBITGUARD"
            buttonText="Read Docs"
            buttonClass="btn-northern"
          />
          <QuickActionCard
            title="Support Server"
            description="Join our support community for help, updates, and discussions"
            buttonText="Join Server"
            buttonClass="btn-quantum"
          />
        </div>
      </div>
    </Layout>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="quantum-card group">
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }) {
  const isPositive = trend.startsWith('+') || trend === 'Perfect';
  
  return (
    <div className="quantum-card">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">{icon}</div>
        <div className={`text-sm px-2 py-1 rounded-full ${
          isPositive 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-red-500/20 text-red-400'
        }`}>
          {trend}
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400">{title}</div>
    </div>
  );
}

function BotFeature({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3 group">
      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function QuickActionCard({ title, description, buttonText, buttonClass }) {
  return (
    <div className="quantum-card text-center">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 text-sm mb-6">{description}</p>
      <button className={`${buttonClass} w-full`}>
        {buttonText}
      </button>
    </div>
  );
}

// This would typically come from your authentication system
export async function getServerSideProps(context) {
  // Mock user data - replace with actual Discord OAuth
  const user = null; // Will be populated by Discord OAuth
  
  return {
    props: {
      user,
    },
  };
}
