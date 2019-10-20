import hljs from 'highlight.js'
import marked from 'marked'

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
})
