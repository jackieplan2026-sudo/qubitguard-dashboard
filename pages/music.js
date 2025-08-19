import { useState } from 'react';
import Layout from '../components/Layout';
import { 
  FiMusic, FiPlay, FiPause, FiSkipForward, FiSkipBack, 
  FiVolumeX, FiVolume1, FiVolume2, FiShuffle, FiRepeat,
  FiList, FiRadio, FiSettings
} from 'react-icons/fi';

export default function Music({ user }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentSong, setCurrentSong] = useState({
    title: "No song playing",
    artist: "",
    thumbnail: "",
    duration: "0:00",
    progress: 0
  });

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <FiMusic className="mr-3 text-purple-400" />
            Music Control Center
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Control your server's music with support for YouTube, Spotify, SoundCloud, Deezer, Apple Music and more.
            Features 24/7 mode, DJ roles, filters, playlists, and advanced audio controls.
          </p>
        </div>

        {/* Current Song */}
        <div className="quantum-card">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
              <FiMusic className="text-4xl text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{currentSong.title}</h3>
              {currentSong.artist && <p className="text-slate-400 mb-3">{currentSong.artist}</p>}
              
              {/* Progress Bar */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-400">0:00</span>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${currentSong.progress}%` }}
                  />
                </div>
                <span className="text-sm text-slate-400">{currentSong.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Music Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Playback Controls */}
          <div className="quantum-card">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <FiPlay className="mr-2 text-green-400" />
              Playback Controls
            </h2>
            
            <div className="space-y-4">
              {/* Main Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors">
                  <FiSkipBack className="text-xl text-white" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all transform hover:scale-105"
                >
                  {isPlaying ? (
                    <FiPause className="text-2xl text-white" />
                  ) : (
                    <FiPlay className="text-2xl text-white ml-1" />
                  )}
                </button>
                <button className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors">
                  <FiSkipForward className="text-xl text-white" />
                </button>
              </div>

              {/* Secondary Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                  <FiShuffle className="text-lg" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                  <FiRepeat className="text-lg" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                  <FiList className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Volume Control */}
          <div className="quantum-card">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <FiVolume2 className="mr-2 text-blue-400" />
              Volume Control
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiVolumeX className="text-slate-400" />
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <FiVolume2 className="text-blue-400" />
              </div>
              <div className="text-center">
                <span className="text-lg font-semibold text-white">{volume}%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quantum-card">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <FiSettings className="mr-2 text-yellow-400" />
              Quick Actions
            </h2>
            
            <div className="space-y-3">
              <button className="w-full btn-quantum flex items-center justify-center">
                <FiRadio className="mr-2" />
                24/7 Mode
              </button>
              <button className="w-full btn-northern flex items-center justify-center">
                <FiList className="mr-2" />
                View Queue
              </button>
              <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                <FiSettings className="mr-2" />
                Audio Filters
              </button>
            </div>
          </div>
        </div>

        {/* Music Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MusicFeature
            icon={<FiMusic className="text-purple-400" />}
            title="Multi-Platform"
            description="YouTube, Spotify, SoundCloud, Deezer, Apple Music support"
          />
          <MusicFeature
            icon={<FiRadio className="text-green-400" />}
            title="24/7 Mode"
            description="Keep the music playing even when no one is in voice chat"
          />
          <MusicFeature
            icon={<FiSettings className="text-blue-400" />}
            title="Audio Filters"
            description="Bass boost, nightcore, 8D, and many more audio effects"
          />
          <MusicFeature
            icon={<FiList className="text-yellow-400" />}
            title="Custom Playlists"
            description="Create and manage custom playlists for your server"
          />
        </div>

        {/* DJ System */}
        <div className="quantum-card">
          <h2 className="text-2xl font-bold text-white mb-6">🎧 DJ Role System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">DJ Permissions</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Skip songs without voting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Manage queue and playlists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Control volume and filters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Enable/disable 24/7 mode</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Available Commands</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div><code className="bg-slate-700 px-2 py-1 rounded">/play [song]</code> - Play a song</div>
                <div><code className="bg-slate-700 px-2 py-1 rounded">/skip</code> - Skip current song</div>
                <div><code className="bg-slate-700 px-2 py-1 rounded">/queue</code> - View music queue</div>
                <div><code className="bg-slate-700 px-2 py-1 rounded">/volume [0-100]</code> - Set volume</div>
                <div><code className="bg-slate-700 px-2 py-1 rounded">/filter [type]</code> - Apply audio filter</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="quantum-card text-center">
          <h2 className="text-2xl font-bold text-white mb-6">🎵 Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <PlatformSupport name="YouTube" emoji="📺" />
            <PlatformSupport name="Spotify" emoji="🟢" />
            <PlatformSupport name="SoundCloud" emoji="🧡" />
            <PlatformSupport name="Deezer" emoji="🎶" />
            <PlatformSupport name="Apple Music" emoji="🍎" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MusicFeature({ icon, title, description }) {
  return (
    <div className="quantum-card text-center group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}

function PlatformSupport({ name, emoji }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-sm font-semibold text-white">{name}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = null;
  
  return {
    props: {
      user,
    },
  };
}
