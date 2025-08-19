// QUBITGUARD Spotify Callback API Route
// ©2025 QUBITGUARD. All Rights Reserved. Made With 💚 For The Discord Community

export default async function handler(req, res) {
  // This endpoint handles Spotify OAuth callbacks
  // Redirect URI: https://www.QUBITGUARD.gg/api/spotify/callback
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code, error, state } = req.query;

    if (error) {
      console.error('Spotify OAuth error:', error);
      return res.status(400).json({ 
        error: 'OAuth error', 
        details: error 
      });
    }

    if (!code) {
      return res.status(400).json({ 
        error: 'Missing authorization code' 
      });
    }

    // Here you would normally:
    // 1. Exchange the code for an access token
    // 2. Store the token securely
    // 3. Associate it with the user/guild
    
    // For now, we'll just acknowledge the callback
    console.log('Spotify callback received:', { code, state });

    // Redirect to success page or dashboard
    res.redirect('/music?spotify=connected');

  } catch (err) {
    console.error('Spotify callback error:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      message: err.message 
    });
  }
}
