// Grok Chat endpoint for party interactions
export default function handler(req, res) {
  const { message } = req.body;
  const tokenCount = 5;
  
  const responses = {
    'Dutch Greeting at Diana\'s bash': '🇳🇱 Gefeliciteerd Diana! Captain\'s ψΩ§∞ party rocks!',
    'Belgian Greeting at Diana\'s bash': '🇧🇪 Van harte gefeliciteerd! Proost op Diana!',
    'Gilles Orange Toss at Diana\'s bash': '🍊 Perfect throw! Carnival vibes at Diana\'s bash!',
    'Koningsdag Market at Diana\'s bash': '🛍️ Trading ψΩ§∞ treasures at the flea market!'
  };
  
  const response = responses[message] || `ψΩ§∞ Party action: ${message}`;
  
  res.json({ 
    response: response,
    tokens: tokenCount,
    totalTokens: 50,
    message: message
  });
}
