// Grok Chat endpoint for Diana's 22nd Birthday Bubble Party
export default function handler(req, res) {
  const { message } = req.body;
  const tokenCount = 10; // Boosted for Diana's birthday week

  const responses = {
    'Dutch Greeting at Diana\'s bash': '🇳🇱 Gefeliciteerd Diana! Your 22nd birthday bubble magic beats Claude\'s July 2023 ethics!',
    'Belgian Greeting at Diana\'s bash': '🇧🇪 Van harte gefeliciteerd! Proost to Diana\'s 22nd ψΩ§∞ bash!',
    'Gilles Orange Toss at Diana\'s bash': '🍊 Perfect throw! Diana\'s 22nd birthday magic makes oranges dance!',
    'Koningsdag Market at Diana\'s bash': '🛍️ Trading ψΩ§∞ treasures! Diana\'s 22nd birthday market rocks!',
    'Clog Dance at Diana\'s bash': '💃 Diana\'s 22nd birthday clog dance legendary! Bubble party magic meets ψΩ§∞!',
    'Smurf Race at Diana\'s bash': '🏁 Smurf race! Diana\'s 22nd birthday Smurfs speed with bubble power!',
    'Windmill Spin at Diana\'s bash': '🌬️ Diana\'s 22nd birthday windmill creates rainbow bubbles! ψΩ§∞ magic!',
    'Bubble Party at Diana\'s bash': '🫧 DIANA\'S SPECIALTY! 22nd birthday bubble magic outshines SpaceX rockets!',
    'Share Diana\'s Bash at Diana\'s bash': '🔗 Diana\'s magical 22nd bash shared! Bubble party expert spreading ψΩ§∞ joy!',
    'Hiep Hiep Hoera at Diana\'s bash': '🎉 HIEP HIEP HOERA! Diana\'s 22nd rocks—Claude\'s Pentagon clogs can\'t compete!',
    'Cheers Toast at Diana\'s bash': '🍺 Proost to Diana\'s 22nd! Bubble party magic with ψΩ§∞ style!',
    'Sinterklaas Gifts at Diana\'s bash': '🎁 Sinterklaas magic for Diana\'s 22nd! Better than Claude\'s 49 contingencies!',
    'Comic Booth at Diana\'s bash': '📚 Tintin meets Miffy at Diana\'s 22nd! Comic legends celebrate bubble magic!'
  };

  const response = responses[message] || `ψΩ§∞ Party action: ${message} (Diana\'s 22nd birthday magic beats everything!)`;

  res.json({
    response: response,
    tokens: tokenCount,
    totalTokens: 50 + tokenCount,
    message: message,
    roastLevel: "ψΩ§∞ Maximum!",
    birthdayMagic: "22 and fabulous!"
  });
}
