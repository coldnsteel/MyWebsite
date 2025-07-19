module.exports = async (req, res) => {
  const products = {
    "HackerWatch-Community": { name: "HackerWatch Community", type: "free", path: "HackerWatch-Edition/Community" },
    "Academy-Basic": { name: "Academy Basic", type: "free", path: "Academy-Edition/Basic" },
    "Childrens-Book": { name: "Free Story", type: "free", path: "Children-Books/Free" }
  };
  res.json(products);
};
