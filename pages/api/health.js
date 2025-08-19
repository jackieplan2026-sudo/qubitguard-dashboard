// QUBITGUARD Health Check API Route
// ©2025 QUBITGUARD. All Rights Reserved. Made With 💚 For The Discord Community

export default async function handler(req, res) {
  // Simple health check endpoint
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const healthData = {
      status: 'online',
      timestamp: new Date().toISOString(),
      service: 'QUBITGUARD Dashboard',
      version: '1.0.0',
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    };

    res.status(200).json(healthData);

  } catch (err) {
    console.error('Health check error:', err);
    res.status(500).json({ 
      status: 'error',
      error: err.message,
      timestamp: new Date().toISOString()
    });
  }
}
