const academy = {
  subscribe: async (user) => {
    console.log(`Subscribing ${user} to Academy...`);
    const response = await fetch('/api/academy-subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, plan: 'ψΩ§∞ Pro' })
    });
    return response.json();
  }
};
module.exports = academy;
