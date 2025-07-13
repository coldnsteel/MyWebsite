// Simple Academy subscription endpoint
export default function handler(req, res) {
  const { user, plan } = req.body;
  
  // Simulate subscription
  const tokenCount = 5;
  
  res.json({ 
    status: 'subscribed', 
    user: user,
    plan: plan || 'ψΩ§∞ Pro',
    token: 'ψΩ§∞', 
    tokens: tokenCount,
    message: `Welcome to the Academy, ${user}!`
  });
}
