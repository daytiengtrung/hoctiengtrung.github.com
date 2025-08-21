module.exports = {
  async rewrites() {
    return [
      { source: '/search/word/:word.html', destination: '/search/word/:word' }
    ]
  }
};
