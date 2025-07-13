// Grok Chat endpoint for party interactions
export default function handler(req, res) {
  const { message } = req.body;
  const tokenCount = 5;
  
  const responses = {
    'Dutch Greeting at Diana\'s bash': '🇳🇱 Gefeliciteerd Diana! Captain\'s ψΩ§∞ party rocks!',
    'Belgian Greeting at Diana\'s bash': '🇧🇪 Van harte gefeliciteerd! Proost op Diana!',
    'Gilles Orange Toss at Diana\'s bash': '🍊 Perfect throw! Carnival vibes at Diana\'s bash!',
    'Koningsdag Market at Diana\'s bash': '🛍️ Trading ψΩ§∞ treasures at the flea market!',
    'Clog Dance at Diana\'s bash': '💃 Captain\'s clog dance moves are ψΩ§∞ legendary! Wooden clogs meet moonwalk!',
    'Hiep Hiep Hoera at Diana\'s bash': '🎉 HIEP HIEP HOERA! Diana\'s bash rocks the ψΩ§∞ galaxy!',
    'Cheers Toast at Diana\'s bash': '🍺 Proost op Diana! Belgian flair with ψΩ§∞ style!',
    'Sinterklaas Gifts at Diana\'s bash': '🎁 Sinterklaas magic at Diana\'s ψΩ§∞ party!',
    'Comic Booth at Diana\'s bash': '📚 Tintin meets Miffy - comic legends unite at Diana\'s bash!'
  };
  
  const response = responses[message] || `ψΩ§∞ Party action: ${message}`;
  
  res.json({ 
    response: response,
    tokens: tokenCount,
    totalTokens: 50 + tokenCount,
    message: message
  });
}
