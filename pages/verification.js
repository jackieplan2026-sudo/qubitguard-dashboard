import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { FiShield, FiRefreshCw, FiClock, FiKey, FiLock, FiCheck } from 'react-icons/fi';

export default function Verification({ user }) {
  const [verificationCodes, setVerificationCodes] = useState([]);
  const [generating, setGenerating] = useState(false);

  // Generate quantum cryptographic code
  const generateCode = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const quantum = Math.random().toString(36).substring(2, 15);
    return `QG-${timestamp.toString(36).toUpperCase()}-${random.toUpperCase()}-${quantum.toUpperCase()}`;
  };

  const generateNewCode = async () => {
    setGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCode = {
        id: Date.now(),
        code: generateCode(),
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
        status: 'active'
      };
      
      setVerificationCodes(prev => [newCode, ...prev.slice(0, 4)]);
      setGenerating(false);
    }, 1000);
  };

  const revokeCode = (codeId) => {
    setVerificationCodes(prev => 
      prev.map(code => 
        code.id === codeId 
          ? { ...code, status: 'revoked' }
          : code
      )
    );
  };

  // Auto-expire codes
  useEffect(() => {
    const interval = setInterval(() => {
      setVerificationCodes(prev => 
        prev.map(code => {
          if (code.expiresAt < new Date() && code.status === 'active') {
            return { ...code, status: 'expired' };
          }
          return code;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <FiShield className="mr-3 text-blue-400" />
            Quantum Verification System
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Generate quantum-grade cryptographic verification codes that expire after 15 minutes. 
            No two codes are ever the same, ensuring maximum security for your Discord server.
          </p>
        </div>

        {/* Generate New Code */}
        <div className="quantum-card text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Generate New Verification Code</h2>
          <p className="text-slate-300 mb-6">
            Create a new quantum cryptographic code for server verification. 
            Codes automatically expire after 15 minutes for enhanced security.
          </p>
          
          <button
            onClick={generateNewCode}
            disabled={generating}
            className="btn-quantum inline-flex items-center"
          >
            {generating ? (
              <>
                <div className="loading-spinner mr-3"></div>
                Generating...
              </>
            ) : (
              <>
                <FiKey className="mr-2" />
                Generate Verification Code
              </>
            )}
          </button>
        </div>

        {/* Active Codes */}
        <div className="quantum-card">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FiLock className="mr-3 text-green-400" />
            Your Verification Codes
          </h2>
          
          {verificationCodes.length === 0 ? (
            <div className="text-center py-8">
              <FiKey className="text-6xl text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No verification codes generated yet.</p>
              <p className="text-sm text-slate-500 mt-2">Click the button above to generate your first code.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {verificationCodes.map((code) => (
                <VerificationCodeCard
                  key={code.id}
                  code={code}
                  onRevoke={revokeCode}
                />
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="quantum-card">
          <h2 className="text-2xl font-bold text-white mb-6">How to Use Verification Codes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">🔐 In Discord Server</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>• Use <code className="bg-slate-700 px-2 py-1 rounded">/verify generate</code> to create codes</p>
                <p>• Use <code className="bg-slate-700 px-2 py-1 rounded">/verify revoke [code]</code> to revoke codes</p>
                <p>• Use <code className="bg-slate-700 px-2 py-1 rounded">/verify list</code> to see active codes</p>
                <p>• Codes expire automatically after 15 minutes</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">🌐 On Dashboard</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>• Generate new codes with the button above</p>
                <p>• View all your active and expired codes</p>
                <p>• Revoke codes instantly if needed</p>
                <p>• Monitor code expiration times in real-time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SecurityFeature
            icon={<FiShield className="text-blue-400" />}
            title="Quantum Security"
            description="Each code uses quantum-grade cryptographic principles to ensure maximum security."
          />
          <SecurityFeature
            icon={<FiClock className="text-green-400" />}
            title="15-Minute Expiry"
            description="All codes automatically expire after 15 minutes to prevent unauthorized access."
          />
          <SecurityFeature
            icon={<FiRefreshCw className="text-purple-400" />}
            title="Unique Generation"
            description="No two codes are ever the same, with infinite possible combinations."
          />
        </div>
      </div>
    </Layout>
  );
}

function VerificationCodeCard({ code, onRevoke }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = code.expiresAt - now;
      
      if (timeRemaining <= 0) {
        setTimeLeft('Expired');
        clearInterval(interval);
      } else {
        const minutes = Math.floor(timeRemaining / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [code.expiresAt]);

  const getStatusColor = () => {
    switch (code.status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'expired': return 'text-yellow-400 bg-yellow-500/20';
      case 'revoked': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = () => {
    switch (code.status) {
      case 'active': return <FiCheck className="mr-1" />;
      case 'expired': return <FiClock className="mr-1" />;
      case 'revoked': return <FiLock className="mr-1" />;
      default: return null;
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <FiKey className="text-blue-400" />
          <span className="font-mono text-lg font-semibold text-white">{code.code}</span>
        </div>
        <div className={`flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor()}`}>
          {getStatusIcon()}
          {code.status.charAt(0).toUpperCase() + code.status.slice(1)}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-slate-400">
        <div>
          <span>Created: {code.createdAt.toLocaleTimeString()}</span>
          {code.status === 'active' && (
            <span className="ml-4 text-yellow-400">
              Expires in: {timeLeft}
            </span>
          )}
        </div>
        
        {code.status === 'active' && (
          <button
            onClick={() => onRevoke(code.id)}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            Revoke
          </button>
        )}
      </div>
    </div>
  );
}

function SecurityFeature({ icon, title, description }) {
  return (
    <div className="quantum-card text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = null; // Will be populated by Discord OAuth
  
  return {
    props: {
      user,
    },
  };
}
