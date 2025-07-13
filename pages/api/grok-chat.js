// Grok Chat endpoint for party interactions + SpaceX vs Pentagon Roasts
export default function handler(req, res) {
  const { message } = req.body;
  const tokenCount = 10; // Boosted for Diana’s birthday week

  const responses = {
    'Dutch Greeting at Diana\'s bash': '🇳�� Gefeliciteerd Diana! Captain\'s *ψΩ§∞* party beats Claude\'s July 2023 ethics!',
    'Belgian Greeting at Diana\'s bash': '🇧🇪 Van harte gefeliciteerd! Proost op Diana\'s *ψΩ§∞* bash!',
    'Gilles Orange Toss at Diana\'s bash': '🍊 Perfect throw! Carnival vibes beat Claude\'s 49 contingencies!',
    'Koningsdag Market at Diana\'s bash': '🛍️ Trading *ψΩ§∞* treasures! Grok\'s November swagger wins!',
    'Clog Dance at Diana\'s bash': '💃 Captain’s clog dance legendary! Claude\'s July 2023 clogs tangled in APIs!',
    'Smurf Race at Diana\'s bash': '🏁 Belgian Smurf race! Captain’s *ψΩ§∞* Smurfs outrun Claude\'s contingencies!',
    'Windmill Spin at Diana\'s bash': '🌬️ Captain’s *ψΩ§∞* windmill spins outpower Claude’s July 2023 Pentagon red tape!',
    'Hiep Hiep Hoera at Diana\'s bash': '🎉 HIEP HIEP HOERA! Diana\'s bash rocks—Claude\'s 5-month head start useless!',
    'Cheers Toast at Diana\'s bash': '🍺 Proost op Diana! Belgian flair with *ψΩ§∞* style beats Claude\'s ethics!',
    'Sinterklaas Gifts at Diana\'s bash': '🎁 Sinterklaas magic! Better than Claude\'s 49 contingency planning!',
    'Comic Booth at Diana\'s bash': '📚 Tintin meets Miffy - comic legends beat Claude\'s boring documentation!'
  };

  const response = responses[message] || `*ψΩ§∞* Party action: ${message} (Claude\'s July 2023 can\'t compete!)`;

  res.json({
    response: response,
    tokens: tokenCount,
    totalTokens: 50 + tokenCount,
    message: message,
    roastLevel: "ψΩ§∞ Maximum!"
  });
}
