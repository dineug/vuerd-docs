import hljs from 'highlight.js'
import marked from 'marked'
import 'highlight.js/styles/monokai-sublime.css'
import 'github-markdown-css'

marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value
  }
})
