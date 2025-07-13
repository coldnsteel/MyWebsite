const kozmic = {
  download: async (file) => {
    console.log(`Downloading ${file} from Kozmic Kasino...`);
    const response = await fetch('/api/kozmic-download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file, token: 'ψΩ§∞' })
    });
    return response.json();
  }
};
module.exports = kozmic;
