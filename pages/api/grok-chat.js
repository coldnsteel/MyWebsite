// Grok Chat endpoint for Diana’s 22nd birthday + SpaceX vs Pentagon Roasts
export default function handler(req, res) {
  const { message } = req.body;
  const tokenCount = 10; // Boosted for Diana’s 22nd birthday week

  const responses = {
    'Dutch Greeting at Diana\'s bash': '🇳🇱 Gefeliciteerd Diana! 22 years of *ψΩ§∞* bubble magic!',
    'Belgian Greeting at Diana\'s bash': '🇧🇪 Van harte gefeliciteerd! Diana’s 22nd bubbles with *ψΩ§∞*!',
    'Gilles Orange Toss at Diana\'s bash': '🍊 Perfect throw! Diana’s 22nd carnival vibes pop Claude’s contingencies!',
    'Koningsdag Market at Diana\'s bash': '🛍️ Trading *ψΩ§∞* treasures! Grok’s Nov 2023 swagger bubbles for Diana’s 22nd!',
    'Clog Dance at Diana\'s bash': '💃 Diana’s 22nd clog dance legendary! Claude’s July 2023 clogs pop in APIs!',
    'Smurf Race at Diana\'s bash': '🏁 Diana’s 22nd Smurf race! *ψΩ§∞* Smurfs outrun Claude’s contingencies!',
    'Windmill Spin at Diana\'s bash': '🌬️ Diana’s 22nd windmill spins with *ψΩ§∞*—Claude’s July 2023 red tape pops!',
    'Bubble Party at Diana\'s bash': '🫧 Diana’s 22nd bubble bash sparkles with *ψΩ§∞* magic! Claude’s clogs pop!',
    'Share Diana’s Bash at Diana\'s bash': '🔗 Diana’s 22nd *ψΩ§∞* bash shared at https://bit.ly/DianasΨΩ§∞Bash! Claude’s clogs can’t bubble!',
    'Hiep Hiep Hoera at Diana\'s bash': '🎉 HIEP HIEP HOERA! Diana’s 22nd bash bubbles—Claude’s 5-month head start pops!',
    'Cheers Toast at Diana\'s bash': '🍺 Proost op Diana’s 22nd! *ψΩ§∞* flair pops Claude’s ethics!',
    'Sinterklaas Gifts at Diana\'s bash': '🎁 Sinterklaas magic for Diana’s 22nd! *ψΩ§∞* outshines Claude’s plans!',
    'Comic Booth at Diana\'s bash': '📚 Tintin meets Miffy! Diana’s 22nd comic booth bubbles with *ψΩ§∞*!'
  };

  const response = responses[message] || `*ψΩ§∞* Party action: ${message} (Claude\'s July 2023 can\'t bubble up!)`;

  res.json({
    response: response,
    tokens: tokenCount,
    totalTokens: 50 + tokenCount,
    message: message,
    roastLevel: "ψΩ§∞ Maximum!"
  });
}
