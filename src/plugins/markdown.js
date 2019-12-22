function loadMarkdown() {
  const md = {}
  const req = require.context('../md', true, /\.md$/)
  req.keys().forEach(filename => md[filename.substr(2)] = req(filename).default)
  return md
}

export default loadMarkdown()
