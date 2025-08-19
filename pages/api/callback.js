// QUBITGUARD General Callback API Route
// ©2025 QUBITGUARD. All Rights Reserved. Made With 💚 For The Discord Community

export default async function handler(req, res) {
  // This endpoint handles general OAuth callbacks for backward compatibility
  // Redirect URI: https://www.QUBITGUARD.gg/api/callback
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code, error, state, service } = req.query;

    if (error) {
      console.error('OAuth error:', error);
      return res.status(400).json({ 
        error: 'OAuth error', 
        details: error 
      });
    }

    // Route to appropriate service based on state or service parameter
    if (state && state.includes('spotify') || service === 'spotify') {
      // Forward to Spotify callback
      return res.redirect(`/api/spotify/callback?${new URLSearchParams(req.query).toString()}`);
    }

    // Default handling for other services
    console.log('General callback received:', req.query);

    // Redirect to dashboard with success message
    res.redirect('/?callback=success');

  } catch (err) {
    console.error('Callback error:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      message: err.message 
    });
  }
}
